var ANRai = {
  startSim : function ( reactorT, dataLink ) {
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
          if( hourHand == 1, minHand == 0 ) {
            dayCount += 1;
          }
          document.getElementById("simHrsInt").innerHTML = hourHand+":"+minHand;
          document.getElementById("simDayInt").innerHTML = dayCount;

          //set demand data
          var inspectDemandCode = sampleData[dataRefInt];
          var inspectTimeArray = inspectDemandCode.split("^");

          var dataRangePreArray = inspectTimeArray[1];
          var dataRangeArray = dataRangePreArray.split("-");

          var timeString = hourHand+"."+minHand;
          if( timeString == inspectTimeArray[0] ) {
            dataRefInt += 1;
          } else {
            document.getElementById("demandInt").innerHTML = Math.floor(Math.random() * (dataRangeArray[1] - dataRangeArray[0] + 1) ) + dataRangeArray[0];
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
