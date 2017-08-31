const express = require('express');
const emotionRoutes = express.Router();

const emotionController = require('../controllers/emotion-controller');
emotionRoutes.get('/', emotionController.index);
emotionRoutes.post('/', emotionController.create);

emotionRoutes.get('/add', (req, res) => {
  res.render('emotions/emotion-add');
});

emotionRoutes.get('/:id', emotionController.show);

emotionRoutes.get('/:id/edit', emotionController.edit);
emotionRoutes.put('/:id', emotionController.update);

emotionRoutes.delete('/:id', emotionController.delete);

module.exports = emotionRoutes;
