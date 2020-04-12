CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(50) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  bmi NUMERIC DEFAULT 0
);


CREATE TABLE meals (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  created_date TIMESTAMP DEFAULT NOW(),
  is_public BOOLEAN DEFAULT TRUE,
  is_deleted BOOLEAN DEFAULT TRUE,
);


CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  meal_id INT REFERENCES meals(id) ON DELETE CASCADE,
  favorited_date TIMESTAMP DEFAULT NOW()
);

CREATE TABLE meal_photos (
  id SERIAL PRIMARY KEY,
  meal_id INT REFERENCES meals(id) ON DELETE CASCADE,
  image_url VARCHAR(255)
);

CREATE TABLE ingredients (
  id  SERIAL PRIMARY KEY,
  product VARCHAR(255) NOT NULL,
  nut_info TEXT
);

CREATE TABLE meal_ingredients (
  id SERIAL PRIMARY KEY,
  meal_id INT REFERENCES meals(id) ON DELETE CASCADE,
  ingredient_id INT REFERENCES ingredients(id),
  serving_size INT
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  category VARCHAR(255)
);

CREATE TABLE meal_categories (
  id  SERIAL PRIMARY KEY,
  meal_id INT REFERENCES meals(id) ON DELETE CASCADE,
  category_id INT REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE user_preferences (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  is_disliked BOOLEAN DEFAULT FALSE,
  ingredient_id INT REFERENCES ingredients(id)
);