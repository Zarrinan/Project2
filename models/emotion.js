const db = require('../db/config');

const Emotion = {};

Emotion.findAll = () => {
  console.log('in findAll function')
  return db.query(`
    SELECT emotions.id, emotions.happiness, emotions.sadness,
    emotions.anger, emotions.fear, emotions.comments,
    emotions.date_created, users.user_name
    FROM emotions INNER JOIN users ON
    (users.id=emotions.user_name_id)
    ORDER BY id
    `);
}

Emotion.findById = (id) => {
  return db.oneOrNone(`
    SELECT emotions.id, emotions.happiness, emotions.sadness,
    emotions.anger, emotions.fear, emotions.comments,
    emotions.date_created, users.user_name
    FROM emotions INNER JOIN users ON
    (users.id=emotions.user_name_id)
    WHERE emotions.id = $1;
    `, [id]);
}

Emotion.create = (emotion) => {
 emotion.user_name_id = Number.parseInt(emotion.user_name_id, 10);
  console.log(emotion.user_name_id);
  return db.one(`
    INSERT INTO emotions
    (happiness, sadness, anger, fear,
    comments, user_name_id)
    VALUES
    ($1, $2, $3, $4, $5, $6)
    RETURNING *
    `, [emotion.happiness, emotion.sadness,
    emotion.anger, emotion.fear, emotion.comments,
    emotion.user_name_id]);

  }


Emotion.update = (emotion, id) => {
  return db.one(`
    UPDATE emotions
    SET
    happiness = $1,
    sadness = $2,
    anger = $3,
    fear = $4,
    comments = $5,
    user_name_id = $6
    WHERE id = $7
    RETURNING *
    `, [emotion.happiness, emotion.sadness, emotion.anger, emotion.fear, emotion.comments, emotion.user_name_id, id]);
}

Emotion.destroy = (id) => {
  return db.none(`
    DELETE FROM emotions
    WHERE id = $1
    `, [id]);
}

module.exports = Emotion;













