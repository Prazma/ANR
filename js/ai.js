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
      var baseTime = 9.00;
      var s = setInterval(function(){
        if( safetyMode == false ) {
          timeCount += 1;
          //convert time count to actual time
          var ccTime = baseTime + (timeCount/100);
          console.log(ccConvert);

          if(timeCount >= 432000) {
            clearInterval(i);
            alert("done with simulation");
          }
        }
      }, 100);
    }
  }
}
