const Emotion = require('../models/emotion');

const emotionController = {};

emotionController.index = (req, res) => {
  Emotion.findAll()
     .then(emotions => {
      console.log(emotions);
      res.render('emotions/emotion-index', {
        message: 'ok',
        data: emotions,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

emotionController.show = (req, res) => {
  Emotion.findById(req.params.id)
    .then(emotion => {
      res.render('emotions/emotion-single', {
        message: 'ok',
        data: emotion,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

emotionController.create = (req, res) => {
  Emotion.create({
    happiness: req.body.happiness,
    sadness: req.body.sadness,
    anger: req.body.anger,
    fear: req.body.fear,
    comments: req.body.comments,
    user_name_id: req.body.user_name_id,
  }).then(emotion => {
    res.redirect('/emotions');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

emotionController.update = (req, res) => {
  Emotion.update({
    happiness: req.body.happiness,
    sadness: req.body.sadness,
    anger: req.body.anger,
    fear: req.body.fear,
    comments: req.body.comments,
    user_name_id: req.body.user_name_id,
  }, req.params.id).then(emotion => {
    res.redirect('/emotions');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

emotionController.edit = (req, res) => {
    Emotion.findById(req.params.id)
    .then(emotion => {
      res.render('emotions/emotion-edit', {
        data: emotion,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};


emotionController.delete = (req, res) => {
    Emotion.destroy(req.params.id)
    .then(() => {
      res.redirect('/emotions');
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = emotionController;



























