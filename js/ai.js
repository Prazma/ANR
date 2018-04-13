document.getElementById("rCoreR").value = 0;
var ANRai = {
  controlA : function () {

  },
  startSim : function ( reactorT ) {
    if( reactorT == "pwr" ) {
      var safetyMode = true;
      var setup = 0;
      var time = 9.00;
      document.getElementById("bAcidState").innerHTML = "on";
      var i = setInterval(function(){
        setup += 1;
        document.getElementById("cpri").value = setup;
        document.getElementById("rodPosR").value = parseInt(document.getElementById("rodPosR").value) + 1;
        document.getElementById("crpint").innerHTML = document.getElementById("rodPosR").value;
        //start main sim
        if(setup == 50) {
          clearInterval(i);
          safetyMode = false;
        }

      }, 2);

      var allTime = 0;
      var disTime = 0;

      var timeCount = 0;
      var dayCount = 1;
      var baseTime = 9*60;
      var dataRefInt = 0;
      var rangeRefInt = 0;
      var s = setInterval(function(){
        if( safetyMode == false ) {
          timeCount += 1;
          var hourHand = 0;
          var minHand = 0;
          for(i=0;i<baseTime+timeCount;i++){
            minHand += 1;
            if(minHand == 60 ) {
              minHand = 0;
              hourHand += 1;
              if( hourHand == 25 ) {
                hourHand = 1;
              }
            }
          }
          if( hourHand == 1&&minHand == 0 ) {
            dayCount += 1;
          }
          document.getElementById("simHrsInt").innerHTML = hourHand+":"+minHand;
          document.getElementById("simDayInt").innerHTML = dayCount;

          //set demand data
          var limitStamp = sampleTData[dataRefInt];
          var checkStamp = hourHand + minHand/100;
          if( limitStamp ==  checkStamp ) {
            dataRefInt += 1;
            rangeRefInt += 2;
            if(dataRefInt == 36 ){
              dataRefInt = 0;
              rangeRefInt = 0;
            }
          } else {
            var dData = Math.floor(Math.random() * (sampleRData[rangeRefInt+1] - sampleRData[rangeRefInt] + 1) ) + sampleRData[rangeRefInt];
            document.getElementById("demandInt").innerHTML = dData;
          }

          //AI control behavior and the calculation of output and input
          var cpriVal = document.getElementById("cpri").value;
          var cRCoreR = document.getElementById("rodPosR").value;
          var stOut = document.getElementById("strOu").value;
          document.getElementById("rCoreR").value = 30 + parseInt(cRCoreR);
          document.getElementById("cpri").value = setup + parseInt(cRCoreR) - parseInt(stOut);
          document.getElementById("npOutput").value = parseInt(stOut)*16.95;

          var insOutput = dData/16.95;
          document.getElementById("strOu").value = insOutput;
          document.getElementById("soint").innerHTML = document.getElementById("strOu").value;
          document.getElementById("eonpR").innerHTML = Math.floor(parseInt(stOut)*16.95);
          var coolantVar =  document.getElementById("cpri").value;
          var intCvar = parseInt(coolantVar);
          if( intCvar == 50 ) {

          } else if( intCvar < 50 ) {
            document.getElementById("rodPosR").value = parseInt(document.getElementById("rodPosR").value) + 1;
          } else if( intCvar > 50 ) {
            document.getElementById("rodPosR").value = parseInt(document.getElementById("rodPosR").value) - 1;
          }

          document.getElementById("crpint").innerHTML = document.getElementById("rodPosR").value;

          allTime += 0.01;

          if( document.getElementById("eonpR").innerHTML == document.getElementById("demandInt").innerHTML ) {
            disTime += 1;
          }

          document.getElementById("accInt").innerHTML = Math.floor(disTime/allTime);

          if(timeCount >= 432000) {
            clearInterval(i);
            alert("done with simulation");
          }
        }
      }, 10);
    }
  }
}
