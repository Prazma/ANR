
var dataPlan = document.getElementById("dataPlan");
var uploadPort = document.getElementById("uploadPort");
var filePort = document.getElementById("filePort");
var javascriptAlert = document.getElementById("javascriptAlert");
var programPort = document.getElementById("programPort");

var simPort  = document.getElementById("simPort");
simPort.style.margintop = "10px";
var simDeact = document.getElementById("simDeact");
var simAct = document.getElementById("simAct");

javascriptAlert.style.display = "none";
programPort.style.display = "block";

uploadPort.style.marginTop = "10px";
uploadPort.style.marginTop = "10px";

dataPlan.onchange = function () {
  if( dataPlan.value == "sample" ) {
    uploadPort.style.display = "none";
  } else {
    uploadPort.style.display = "block";
  }
}

function startSimTraining() {
  if( dataPlan.value == "sample" ) {
    simAct.style.display = "block";
    simDeact.style.display = "none";
  } else {

  }
}
