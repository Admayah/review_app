import { pool } from '../models/pool';
import {
  dropReviewsTable,
  createReviewsTable
} from './query';

export const executeQueryArray = async arr => new Promise(resolve => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([dropReviewsTable]);
export const createTables = () => executeQueryArray([createReviewsTable]);
// export const insertIntoTables = () => executeQueryArray([ insertMessages ]);
