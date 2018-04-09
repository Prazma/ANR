var sampleData = [2.37^1030-1050,2:50^1050-1100,3.10^1100-1150,3.40^1150-1200,4.20^1200-1250,5.30^1250-1300,5.50^1200-1250,6.00^1150-1200,7.10^1100-1150,7.50^1150-1200,8.20^1100-1150,9.20^1150-1200,10.30^1100-1150,10.50^1150-1200,11.10^1200-1250,12.00^1250-1300,12.30^1300-1350,12.50^1350-1400,1.40^1400-1450,2.00^1450-1500,2.15^1500-1550,2.50^1550-1600,3.20^1500-1550,3.50^1550-1600,4.20^1500-1550,4.45^1550-1600,5.15^1500-1550,5.30^1450-1500,6.05^1400-1450,6.25^1350-1400,6.52^1300-1350,7.10^1250-1300,7.25^1200-1250,7.50^1150-1200,8.15^1100-1150,9.00^1000-1100];
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
    if( dataPlan.value == "sample" ) {
      ANRai.startSim("pwr", sampleData);
    } else {
      ANRai.startSim("pwr");
    }
  } else {

  }
}
