var sampleRData = [1030,1050,1050,1100,1100,1150,1150,1200,1200,1250,1300,1350,1200,1250,1150,1200,1100,1150,1150,1200,1100,1150,1150,1200,1100,1150,1150,1200,1200,1250,1250,1300,1300,1350,1350,1400,1400,1450,1450,1500,1500,1550,1550,1600,1500,1550,1550,1600,1500,1550,1550,1600,1500,1550,1450,1500,1400,1450,1350,1400,1300,1350,1250,1300,1200,1250,1150,1200,1100,1150,1000,1100];
var sampleTData = [14.37,14.50,15.10,15.40,16.20,16.30,17.50,18.00,19.10,19.50,20.20,21.20,22.30,22.50,23.10,24.00,24.30,24.50,1.40,2.00,2.15,2.50,3.20,3.50,4.20,4.45,5.15,5.30,6.05,6.26,6.52,7.10,7.25,7.50,8.15,9.00];

var dataPlan = document.getElementById("dataPlan");
var uploadPort = document.getElementById("uploadPort");
var filePort = document.getElementById("filePort");
var javascriptAlert = document.getElementById("javascriptAlert");
var programPort = document.getElementById("programPort");

var simPort  = document.getElementById("simPort");
simPort.style.margintop = "10px";
var simDeact = document.getElementById("simDeact");
var simAct = document.getElementById("simAct");

javascriptAlert.style.display = "block";
programPort.style.display = "none";

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
    ANRai.startSim("pwr");

  } else {
    //get file link or make input type="file" element value binary txt
  }
}

function updCrodPos( ele ) {
  document.getElementById("crpint").innerHTML = ele.value;
}

function soUpd( ele ) {
  document.getElementById("soint").innerHTML = ele.value;
}
