import { getRepository, Repository } from 'typeorm';
import Post from '../models/Post';

interface Pagination {
  total: number;
  numPages: number;
  currentPage: number;
  nextPage: number | null;
  previousPage: number | null;
}

interface Response extends Pagination {
  posts: Post[];
}

interface Request {
  items?: number;
  page?: number;
  filters: {
    server: string;
  };
}

class ListPostService {
  postRepository: Repository<Post>;

  constructor() {
    this.postRepository = getRepository(Post);
  }

  public async execute({
    items = 10,
    page = 1,
    filters: { server = 'ALL' },
  }: Request): Promise<Response> {
    const filtersQueryObject = {
      where: {},
    };

    const availableServerFilters = ['BR1', 'NA1', 'EUN1', 'EUW1'];

    if (!availableServerFilters.includes(server)) {
      filtersQueryObject.where = {};
    } else {
      filtersQueryObject.where = {
        server,
      };
    }

    // if (!availableServerFilters.includes(server)) {
    // }

    const limit = (page - 1) * items;

    const [posts, total] = await this.postRepository.findAndCount({
      ...filtersQueryObject,
      order: {
        created_at: 'DESC',
      },

      take: items,
      skip: limit,
    });

    let nextPage = null;
    let previousPage = null;

    const numPages = Math.ceil(total / items);

    if (page < numPages) {
      previousPage = page > 0 ? page - 1 : null;
      nextPage = page < numPages - 1 ? page + 1 : null;
    }

    if (page === numPages) {
      nextPage = null;
      previousPage = page - 1;
    }

    if (page === numPages - 1) {
      nextPage = page + 1;
    }

    if (page === 1) {
      previousPage = null;
    }

    const pagination: Pagination = {
      total,
      numPages,
      previousPage,
      currentPage: page,
      nextPage,
    };

    return {
      ...pagination,
      posts,
    };
  }
}

export default ListPostService;
