\connect emotions_db_dev;

CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
user_name VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS emotions (
id SERIAL PRIMARY KEY,
happiness INT,
sadness INT,
anger INT,
fear INT,
user_name_id INTEGER REFERENCES users(id),
comments TEXT,
date_created TIMESTAMP NOT NULL DEFAULT NOW()
);



-- CREATE INDEX ON emotions (happiness);
-- CREATE INDEX ON emotions (sadness);
