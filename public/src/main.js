console.log('main.js is connected!');
$(document).ready(function(){

  $header = $('#header');
  $homeLink = $('#homeLink');
  $addHappiness = $('#addHappiness');
  $addSadness = $('#addSadness');
  $addAnger = $('#addAnger');
  $addFear = $('#addFear');

let msObject = {
    "happiness": Math.floor(Math.random()*10),
    "sadness": Math.floor(Math.random()*10),
    "anger": Math.floor(Math.random()*10),
    "fear": Math.floor(Math.random()*10),
}

  $addHappiness.attr('placeholder', msObject.happiness);
  $addHappiness.val(msObject.happiness);
  $addSadness.attr('placeholder', msObject.sadness);
  $addSadness.val(msObject.sadness);
  $addAnger.attr('placeholder', msObject.anger);
  $addAnger.val(msObject.anger);
  $addFear.attr('placeholder', msObject.fear);
  $addFear.val(msObject.fear);

});

//----------------cloudinary and ms api call------------------------->
let cloudurl = "https://api.cloudinary.com/v1_1/dx4ans66h/upload";
let cloud_preset = 'ymur1f6n';

let imgPreview = document.getElementById('img-preview');
let fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change', function () {
  let file = event.target.files[0];
  console.log(file);
  let formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', cloud_preset);

  axios({
    url: cloudurl,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-urlencoded'
    },
    data: formData
  }).then(function(res) {
    imgPreview.src = res.data.secure_url;

    return res.data.secure_url;

  }).then(function(res) {
        console.log(res);
        callUrl = String(res);
        console.log(callUrl);
        $.ajax({
        url: "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?",
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                // NOTE: Replace the "Ocp-Apim-Subscription-Key" value with a valid subscription key.
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "1d5ac4d7edda4b41a8681d3a8fcdb337");
                },
        type: "POST",
        // Request body
        data: '{"url": window["callUrl"]}',
          }).done(function(data) {
              alert("success");
          });
        });
      });


//-------------------and of cloudinary and ms api call---------------->
