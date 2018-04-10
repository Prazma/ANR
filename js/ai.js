var ANRai = {
  startSim : function ( reactorT ) {
    if( reactorT == "pwr" ) {
      var safetyMode = true;
      var setup = 11;
      var time = 9.00;
      var i = setInterval(function(){
        setup -= 0.01;
        document.getElementById("cSetupInt").innerHTML =  Math.round(setup*100)/100;

        //start main sim
        if(setup <= 9.01) {
          clearInterval(i);
          safetyMode = false;
        }

      }, 10);

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
            console.log("Range reference integer is :"+rangeRefInt+". thus, data ref int is "+dataRefInt);
          } else {
            document.getElementById("demandInt").innerHTML = Math.floor(Math.random() * (sampleRData[rangeRefInt+1] - sampleRData[rangeRefInt] + 1) ) + sampleRData[rangeRefInt];
          }

          if(timeCount >= 432000) {
            clearInterval(i);
            alert("done with simulation");
          }
        }
      }, 100);
    }
  }
}
