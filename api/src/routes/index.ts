import { Router } from 'express';

import postsRoutes from './posts.routes';

const routes = Router();

routes.use('/posts', postsRoutes);

export default routes;
