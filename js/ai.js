var automationAI = {
  //will add "prediction" AI algorithm later on
  controlReactor : function ( cpp, rct, stg, dem ) {
    var preSet = dem/1695;
    document.getElementById("strOu").value = preSet * 100;
    ouPerc = preSet*100;

    if( parseInt(document.getElementById("cpri").value) < 50 ) {
      console.log()
      var newCpriV = parseInt(document.getElementById("rodPosR").value) + 10;
      document.getElementById("rodPosR").value = newCpriV;
    } else if( parseInt(document.getElementById("cpri").value) > 50 ) {
      var newCpriV = parseInt(document.getElementById("rodPosR").value) - 10;
      document.getElementById("rodPosR").value = newCpriV;
    }

  }
}
