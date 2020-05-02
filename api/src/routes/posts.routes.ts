import { Router } from 'express';

import CreatePostService from '../services/CreatePostService';
import ListPostService from '../services/ListPostService';

const postsRouter = Router();

postsRouter.post('/', async (req, res) => {
  try {
    const { ign, server, description } = req.body;

    const createPost = new CreatePostService();
    const post = await createPost.execute({
      ign,
      server,
      description,
    });

    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

postsRouter.get('/', async (req, res) => {
  const items = req.query.items as string;
  const page = req.query.page as string;
  const server = req.query.server as string;

  let parsedItems;
  let parsedPage;

  if (items) {
    parsedItems = parseInt(items, 10);
  }

  if (page) {
    parsedPage = parseInt(page, 10);
  }

  try {
    const listPosts = new ListPostService();
    const posts = await listPosts.execute({
      items: parsedItems,
      page: parsedPage,
      filters: {
        server,
      },
    });

    return res.json(posts);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default postsRouter;
