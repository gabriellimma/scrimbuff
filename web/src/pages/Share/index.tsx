/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, FormEvent } from 'react';
import { toast } from 'react-toastify';
import Spinner from 'react-spinkit';

import {
  Container,
  Form,
  Input,
  Title,
  ShareBtn,
  Advices,
  TextArea,
} from './styles';
import api from '../../services/api';

const CreatePost = (): JSX.Element => {
  const [userIGN, setUserIGN] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [server, setServer] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function handleFormSubmit(e: FormEvent): Promise<void> {
    e.preventDefault();

    if (!userIGN.length || !server.length) {
      toast.error('Formulário possui erros. Preencha-o corretamente.');
      setLoading(false);

      return;
    }

    if (!['BR1', 'NA1', 'EUW1', 'EUN1'].includes(server)) {
      toast.warn('Server is incorrect. It must be: BR1, EUW1, EUN1 or NA1');
      return;
    }

    if (!userIGN.indexOf('#')) {
      toast.error('Você deve colocar informar sua Tagline.');
      setLoading(false);

      return;
    }

    const reqBody = {
      ign: userIGN,
      server,
      description,
    };

    try {
      setLoading(true);
      await api.post('/posts', reqBody);
      toast.success('Publicação foi criada com sucesso. Veja a lista! ;)');

      setLoading(false);
      setUserIGN('');
      setServer('');
      setDescription('');
    } catch (err) {
      setLoading(false);
      setUserIGN('');
      setServer('');
      setDescription('');
      toast.error('Falha ao criar uma publicação. Tente novamente mais tarde.');
    }
  }

  return (
    <Container>
      <Title id="share">
        <h1>
          SHARE YOUR IGN <br /> AND LET THEM FIND YOU
        </h1>
      </Title>

      <Advices>
        <p>
          It is not allowed to share messages that are related to any kind of
          hate speech.
        </p>
      </Advices>

      <Form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          value={userIGN}
          placeholder="Your Riot ID"
          onChange={(e): void => setUserIGN(e.target.value)}
        />

        <Input
          type="text"
          value={server}
          onChange={(e): void => setServer(e.target.value)}
          placeholder="Your server (BR1, NA1, EUW1, EUN1)"
          minLength={3}
          maxLength={4}
        />

        <TextArea
          value={description}
          placeholder="A message"
          onChange={(e): void => setDescription(e.target.value)}
          maxLength={100}
          rows={4}
        />

        <ShareBtn type="submit" disabled={loading}>
          {loading ? (
            <Spinner name="ball-clip-rotate-multiple" color="#FFF" />
          ) : (
            'Share'
          )}
        </ShareBtn>
      </Form>
    </Container>
  );
};

export default CreatePost;
