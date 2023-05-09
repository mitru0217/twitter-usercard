import React from 'react';
import UserList from 'components/UserList/UserList';
import Container from 'components/utils/Container/Container';
import { Title } from './TweetsPage.styled';
import { BackHome } from './TweetsPage.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const TweetsPage = () => {
  return (
    <Container>
      <Title>Tweets</Title>
      <BackHome to="/">
        <AiOutlineArrowLeft />
        Back
      </BackHome>
      <UserList />
    </Container>
  );
};

export default TweetsPage;
