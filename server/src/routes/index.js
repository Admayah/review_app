import express from 'express';
import { reviewsPage, addReview, reviewPage } from '../controllers/review';

const indexRouter = express.Router();
indexRouter.post('/review', addReview);
indexRouter.get('/reviews', reviewsPage);
indexRouter.get('/review/:id', reviewPage);

export default indexRouter;
