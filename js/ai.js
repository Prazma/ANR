var automationAI = {
  controlReactor : function ( cpp, rct, stg, dem ) {
    document.getElementById("strOu").value = dem/16.95;

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
