var guess1="";
var guess2= "";


Webcam.set({
    width:400,
    height:300,
    image_format:"png",
    png_quality:100

});

Webcam.attach("#webcamDiv");

function takeSnap() {
    Webcam.snap(function(uri){
        document.getElementById("snapDiv").innerHTML='<img id="picture" src="'+uri+'">';
    });
}


console.log(ml5.version);
var model= ml5.imageClassfier("https://teachablemachine.withgoogle.com/models/wn4B4YQ0F/model.json",modelUpdate);

function modelUpdate() {
    console.log("Model is loaded ;)");
}