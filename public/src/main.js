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

//----------------cloudinary api call------------------------->
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
  }).catch(function(err) {
    console.error(err);
  });
});
//-------------------and of cloudinary api call---------------->
