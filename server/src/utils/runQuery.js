import { createTables, dropTables } from './queryFunction';

(async () => {
  await dropTables();
  await createTables();
})();
