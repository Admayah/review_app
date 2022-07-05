import Model from '../models/model';

const reviewsModel = new Model('reviews');

export const reviewsPage = async (req, res) => {
  try {
    const data = await reviewsModel.select('*');
    return res.status(200).json({ messages: data.rows });
  } catch (err) {
    return res.status(500).json({ messages: err.stack });
  }
};

export const addReview = async (req, res) => {
  const { name, review } = req.body;
  const columns = 'name, review';
  const values = `'${name}', '${review}'`;
  try {
    const data = await reviewsModel.insertWithReturn(columns, values);
    return res.status(201).json({ messages: data.rows });
  } catch (err) {
    return res.status(500).json({ messages: err.stack });
  }
};

export const reviewPage = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await reviewsModel.select('*', ` WHERE id=${id}`);
    return res.status(200).json({ messages: data.rows[0] });
  } catch (err) {
    return res.status(500).json({ messages: err.stack });
  }
};
