var ANRai = {
  startSim : function ( reactorT, dataLink ) {
    if( reactorT == "pwr" ) {
      var setup = 11;
      var time = 9.00;
      var i = setInterval(function(){
        setup = setup - 0.01;
        document.getElementById("cSetupInt").innerHTML = setup.split(".")[0] + ":" + setup.split(".")[1];
        if(counter === 3) {
          clearInterval(i);
        }
      }, 10);
    }
  }
}
