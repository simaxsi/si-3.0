function boton_si(){
    navigator.mediaDevices.getUserMedia({ audio: true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/MCtZIz67i/model.json",si)
}

function si(){
    classifier.classify(no);
}

function no(error,a){
    if (error) {
        console.log(error);
    } else {
        console.log(a);
        document.getElementById(
            "si"
        ).innerHTML=a[0].label;
        document.getElementById("melon").innerHTML=a[0].confidence;
    }
}