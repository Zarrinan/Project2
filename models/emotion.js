const db = require('../db/config');

const Emotion = {};

Emotion.findAll = () => {
  console.log('in findAll function')
  return db.query(`
    SELECT * FROM emotions`);
}

Emotion.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM emotions
    WHERE id = $1
    `, [id]);
}

Emotion.create = (emotion) => {
  return db.one(`
    INSERT INTO emotions
    (happiness, sadness, anger, fear, comments)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `, [emotion.happiness, emotion.sadness, emotion.anger, emotion.fear, emotion.comments]);
}

Emotion.update = (emotion, id) => {
  return db.one(`
    UPDATE emotions SET
    happiness = $1,
    sadness = $2,
    anger = $3,
    fear = $4,
    comments = $5
    WHERE id = $6
    RETURNING *
    `, [emotion.happiness, emotion.sadness, emotion.anger, emotion.fear, emotion.comments, id]);
}

Emotion.destroy = (id) => {
  return db.none(`
    DELETE FROM emotions
    WHERE id = $1
    `, [id]);
}

module.exports = Emotion;













