Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( '#webcam' );

function takeSnapshot(){
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML ='<img id="image_result" src="'+data_uri+'"/>';
    } );
}

console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5j0Qscp4q/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }

  function check()
  {
    img = document.getElementById('image_result');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("object_name_resul").innerHTML = results[0].label;
    document.getElementById("accuracy_result").innerHTML = results[0].confidence.toFixed(3);
  }
}

 