export const createReviewsTable = `
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  review VARCHAR NOT NULL
  )
  `;
export const dropReviewsTable = 'DROP TABLE IF EXISTS reviews';
