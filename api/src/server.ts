import 'reflect-metadata';
import dotenv from 'dotenv';
import express, { Response, Request, NextFunction } from 'express';
import cors from 'cors';

import routes from './routes';
import AppError from './errors/AppError';

import './database';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ status: 'error', error: err.message });
  }

  // eslint-disable-next-line no-console
  console.error(err);

  return res
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Server started on port 3333!');
});
