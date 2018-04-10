var sampleRData = [1030,1050,1050,1100,1100,1150,1150,1200,1200,1250,1300,1350,1200,1250,1150,1200,1100,1150,1150,1200,1100,1150,1150,1200,1100,1150,1150,1200,1200,1250,1250,1300,1300,1350,1350,1400,1400,1450,1450,1500,1500,1550,1550,1600,1500,1550,1550,1600,1500,1550,1550,1600,1500,1550,1450,1500,1400,1450,1350,1400,1300,1350,1250,1300,1200,1250,1150,1200,1100,1150,1000,1100];
var sampleTData = [2.37,2.50,3.10,3.40,4.20,5.30,5.50,6.00,7.10,7.50,8.20,9.20,10.30,10.50,11.10,12.00,12.30,12.50,1.40,2.00,2.15,2.50,3.20,3.50,4.20,4.45,5.15,5.30,6.05,6.26,6.52,7.10,7.25,7.50,8.15,9.00];

console.log(sampleRData.length/2);
console.log(sampleTData.length)

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
    ANRai.startSim("pwr", sampleData);

  } else {
    //get file link or make input type="file" element value binary txt
  }
}
