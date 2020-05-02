import { getRepository } from 'typeorm';

import Post from '../models/Post';
import AppError from '../errors/AppError';

interface Request {
  ign: string;
  server: string;
  description: string;
}

class CreatePostService {
  public async execute({ ign, server, description }: Request): Promise<Post> {
    const postRepository = getRepository(Post);

    const IGNRegex = new RegExp('((([a-z]|[0-9]){1,16}))#(([a-z]|[0-9]){3,5})');

    if (!IGNRegex.test(ign)) {
      throw new AppError('Riot ID is invalid', 400);
    }

    const availableServers = ['BR1', 'NA1', 'EUN1', 'EUW1'];

    if (!availableServers.includes(server.toUpperCase())) {
      throw new AppError(
        'Unavailable server. We only work with BRA1, NA1, EU1 and EUW1 servers',
      );
    }

    if (description.length > 100) {
      throw new AppError('Provided description is too long');
    }

    const post = postRepository.create({
      ign,
      server,
      description,
    });

    await postRepository.save(post);

    return post;
  }
}

export default CreatePostService;
