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
  console.log(msObject.happiness);
  console.log(msObject.sadness);
  console.log(msObject.anger);
  console.log(msObject.fear);
  $addHappiness.attr('placeholder', msObject.happiness);
  $addHappiness.val(msObject.happiness);
  $addSadness.attr('placeholder', msObject.sadness);
  $addSadness.val(msObject.sadness);
  $addAnger.attr('placeholder', msObject.anger);
  $addAnger.val(msObject.anger);
  $addFear.attr('placeholder', msObject.fear);
  $addFear.val(msObject.fear);
});
