import React, { useState, useEffect } from 'react';

import {
  Container,
  Title,
  PlayerList,
  Filters,
  Button,
  SpinnedStyled,
  Error,
  ErrorButton,
} from './styles';

import PlayerCard from '../../components/PlayerCard';
import MaterialPagination from '../../components/Material/Pagination';

import api from '../../services/api';
import Post from '../../models/Post';

interface Pagination {
  numPages: number;
  currentPage: number;
  nextPage: number | null;
  previousPage: number | null;
}

interface PostResponse extends Pagination {
  posts: Post[];
}

enum Server {
  BR1,
  NA1,
  EUW1,
  EUN1,
}

const FindPlayers: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [serverSelected, setServerSelected] = useState<Server>(Server.BR1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const requestData = async (
    page = 1,
    server: Server = serverSelected
  ): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await api.get<PostResponse>(
        `/posts?items=10&page=${page}&server=${Server[server]}`
      );

      setPagination({
        numPages: data.numPages,
        currentPage: data.currentPage,
        previousPage: data.previousPage,
        nextPage: data.nextPage,
      });

      setPosts(data.posts);
      setLoading(false);
      setError(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    requestData();
  }, [serverSelected]);

  async function handlePageChange(
    _event: React.ChangeEvent<unknown>,
    value: number
  ): Promise<void> {
    /*
      Value is the page that he changed to
    */

    await requestData(value);
  }

  async function handleServerClick(server: Server): Promise<void> {
    setServerSelected(server);
  }

  async function handleTryAgain(): Promise<void> {
    if (!error) return; // somehow avoid being called when no error is present

    setPosts([]); // Clean the array so nothing shows up

    if (pagination) {
      await requestData(pagination.currentPage);
    } else {
      await requestData(1);
    }
  }

  return (
    <Container id="findplayers">
      <Title>
        <h1>
          FIND PLAYERS <br /> AND ASSEMBLE A SQUAD
        </h1>
      </Title>

      <h2>LIST OF PLAYERS</h2>

      {!error && (
        <Filters>
          <Button
            name="button-server-br"
            type="button"
            onClick={(): Promise<void> => handleServerClick(Server.BR1)}
            isSelected={serverSelected === Server.BR1}
          >
            BR
          </Button>
          <Button
            name="button-server-na"
            type="button"
            onClick={(): Promise<void> => handleServerClick(Server.NA1)}
            isSelected={serverSelected === Server.NA1}
          >
            NA
          </Button>
          <Button
            name="button-server-euw"
            type="button"
            onClick={(): Promise<void> => handleServerClick(Server.EUW1)}
            isSelected={serverSelected === Server.EUW1}
          >
            EUW1
          </Button>
          <Button
            name="button-server-eun"
            type="button"
            onClick={(): Promise<void> => handleServerClick(Server.EUN1)}
            isSelected={serverSelected === Server.EUN1}
          >
            EUN1
          </Button>
        </Filters>
      )}

      {pagination && !loading && !!posts.length && (
        <MaterialPagination
          count={pagination.numPages}
          page={pagination.currentPage}
          onChange={handlePageChange}
          shape="rounded"
          boundaryCount={1}
          color="primary"
        />
      )}

      <PlayerList>
        {loading ? (
          <SpinnedStyled
            name="ball-clip-rotate-multiple"
            color="#FFF"
            fadeIn="half"
          />
        ) : (
          posts.map((post) => <PlayerCard key={post.id} post={post} />)
        )}
      </PlayerList>

      {!loading && !error && !posts.length && (
        <p>Players are walking. We can't hear them.</p>
      )}

      {error && !loading && (
        <Error>
          <p>Something went wrong.</p>

          <ErrorButton type="button" onClick={handleTryAgain}>
            Try again
          </ErrorButton>
        </Error>
      )}
    </Container>
  );
};

export default FindPlayers;
