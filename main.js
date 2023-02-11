Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});
document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'>"
});
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hTPEDMrag/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Is Loaded!");
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data1="The first Prediction is"+Prediction1;
    speak_data2="The second Prediction is"+Prediction2;
    var utterThis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);
}
function check(){
    img=document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}
function gotResult(error , result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById('result_emotion_name').innerHTML=result[0].label;
        document.getElementById('result_emotion_name2').innerHTML=result[1].label;

        if(result[0].label=='Yo!!'){
            document.getElementById('update_emoji').innerHTML='&#128076;';
        }
        if(result[0].label=='Amazing'){
            document.getElementById('update_emoji').innerHTML='&#128077;';
        }
        if(result[0].label=='Thumbs up'){
            document.getElementById('update_emoji').innerHTML='&#9996;';
        }
        if(result[0].label=='Victory'){
            document.getElementById('update_emoji').innerHTML='&#129304;';
        }

        if(result[1].label=='Yo!!'){
            document.getElementById('update_emoji2').innerHTML='&#128076;';
        }

        if(result[1].label=='Amazing'){
            document.getElementById('update_emoji2').innerHTML='&#128077;';
        }

        if(result[1].label=='Thumbs up'){
            document.getElementById('update_emoji2').innerHTML='&#9996;';
        }
        if(result[1].label=='Victory'){
            document.getElementById('update_emoji2').innerHTML='&#129304;';
        
        }
    }
}
    


