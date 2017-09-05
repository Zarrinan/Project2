
console.log('main.js is connected!');
$(document).ready(function(){

  $header = $('#header');
  $homeLink = $('#homeLink');
  $addHappiness = $('#addHappiness');
  $addSadness = $('#addSadness');
  $addAnger = $('#addAnger');
  $addFear = $('#addFear');

//----------------cloudinary and ms api call------------------------->

//axios cloudinary API call tutorial https://www.youtube.com/watch?v=6uHfIv4981U&t=47s
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
    console.log(res.data.secure_url);
    return res.data.secure_url;

  }).then(function(res) {
    console.log(res);
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
        data: '{"url": "https://res.cloudinary.com/dx4ans66h/image/upload/v1504618609/ty3mc3khmmdtjoduniyn.jpg"}',

          }).done(function(data) {

            $addHappiness.val(parseInt(data[0].scores.happiness * 100));
            $addSadness.val(parseInt(data[0].scores.sadness * 100));
            $addAnger.val(parseInt(data[0].scores.anger * 100));
            $addFear.val(parseInt(data[0].scores.fear * 100));
              console.log(data);
              console.log(data[0].scores.happiness);
              console.log(data[0].scores.sadness);
              console.log(data[0].scores.anger);
              console.log(data[0].scores.fear);
          });
        });
      });
});
//-------------------and of cloudinary and ms api call---------------->
