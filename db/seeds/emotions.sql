\c emotions_db_dev

INSERT INTO users (user_name) VALUES
('Mischelle'),
('Andy'),
('Devin'),
('Aileen'),
('Chris'),
('Sarah'),
('Jason');



INSERT INTO emotions (happiness, sadness, anger, fear, comments, user_name_id) VALUES
(
  5,
  4,
  9,
  2,
  'I feel okay today',
  2
),
(
  9,
  0,
  0,
  2,
  'I feel happy today',
  1
),
(
  6,
  3,
  3,
  5,
  'I feel a bit confused',
  3
),
(
  8,
  3,
  3,
  5,
  'I feel like yesterday',
  7
),
(
  9,
  1,
  1,
  3,
  'I am happy, and a bit lost',
  5
);
