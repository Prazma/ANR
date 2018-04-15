var ouPerc = 0;
document.getElementById("rCoreR").value = 0;
var simPlatform = {
  startSim : function ( reactorT, pModeV ) {
    document.getElementById("strtSimBtn").disabled = true;
    document.getElementById("strtSimBtn").value = "Running...";

    if( reactorT == "pwr" ) {
      var safetyMode = true;
      var setup = 0;
      var time = 9.00;
      document.getElementById("bAcidState").innerHTML = "on";
      var i = setInterval(function(){
        setup += 1;
        document.getElementById("rodPosR").value = setup;
        //start main sim
        if(setup == 50) {
          clearInterval(i);
          safetyMode = false;
        }

      }, 2);

      var allTime = 0;
      var disTime = 0;
      var startShield = true;

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

          var demandV = parseInt(document.getElementById("demandInt").innerHTML);

          //AI control behavior and the calculation of output and input
          var cpriVal = document.getElementById("cpri").value;
          var cRCoreR = document.getElementById("rodPosR").value;
          document.getElementById("rCoreR").value = parseInt(document.getElementById("cpri").value)/60 + parseInt(cRCoreR);

          var insOutput = dData/16.95;
          document.getElementById("soint").innerHTML = document.getElementById("strOu").value;
          var coolantVar =  document.getElementById("cpri").value;
          var intCvar = parseInt(coolantVar);

          document.getElementById("crpint").innerHTML = document.getElementById("rodPosR").value;
          var npOutputV = document.getElementById("npOutput").value;

          //very important script
          if( pModeV == "ap" ) {
            automationAI.controlReactorAP( parseInt(cpriVal), parseInt(cRCoreR), parseInt(npOutputV), demandV );
          } else if ( pModeV == "ai" ) {

          }
          var stOut = document.getElementById("strOu").value;
          document.getElementById("npOutput").value = ouPerc*16.95;

          document.getElementById("cpri").value = setup + parseInt(cRCoreR) - parseInt(stOut);
          document.getElementById("eonpR").innerHTML = Math.floor(parseInt(stOut)*16.95);

          if( startShield == false ) {
            var accTime = allTime*0.01;
            document.getElementById("accInt").innerHTML = Math.floor((disTime/accTime)*100)/100;
          }


          if( parseInt(document.getElementById("npOutput").value) == demandV ) {
            disTime += 1;
          }
          allTime += 1;

          if( startShield == false ) {
            if( parseInt(document.getElementById("cpri").value) < 10 || parseInt(document.getElementById("cpri").value) > 90 ) {
              document.body.innerHTML += "<h1 style='color: red'>Reactor has tripped</h1>";
              setTimeout( function () {
                location.reload();
              }, 500 )
            }
          } else {
            startShield = false;
          }


          if(timeCount >= 432000) {
            clearInterval(i);
            alert("done with simulation");
          }
        }
      }, 1);
    }
  }
}
