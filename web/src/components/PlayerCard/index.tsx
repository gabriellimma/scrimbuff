import React from 'react';

import { Item } from './styles';
import Post from '../../models/Post';

interface Props {
  post: Post;
}

const PlayerCard: React.FC<Props> = ({ post }) => {
  const [riotID, tagline] = post.ign.split('#');

  return (
    <Item>
      <li>
        {riotID}#{tagline}
      </li>

      <li>{post.server.toUpperCase()}</li>

      <li>{post.description}</li>
    </Item>
  );
};

export default PlayerCard;
