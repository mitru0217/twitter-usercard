import React, { useState, useEffect } from 'react';

import ImgCard from 'assets/images/picture2 1.png';
import {
  CardWrapper,
  LogoWrapper,
  LogoStyled,
  Thumb,
  ImgStyled,
  Line,
  Circle,
  Composition,
  TextStyled,
  InfoBlock,
  Img,
} from './UserCard.styled';
import Button from '../utils/Button';

const UserCard = ({ user }) => {
  const { id, avatar, name, tweets, followers } = user;

  const savedUsers = JSON.parse(localStorage.getItem('users'));
  const savedUser = savedUsers.find(u => u.id === user.id);
  const [isFollowing, setIsFollowing] = useState(
    savedUser ? savedUser.isFollowing : false
  );

  const newFollowers = isFollowing ? followers + 1 : followers;
  const newButton = isFollowing ? 'Following' : 'Follow';
  const newBgButton = isFollowing ? '#5CD3A8' : '#EBD8FF';

  const handleFollowClick = () => {
    const updatedUser = {
      ...user,
      isFollowing: !isFollowing,
    };

    setIsFollowing(!isFollowing);

    const users = JSON.parse(localStorage.getItem('users'));
    const index = users.findIndex(u => u.id === user.id);

    users[index] = updatedUser;

    localStorage.setItem('users', JSON.stringify(users));
  };
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users'));
    const index = users.findIndex(u => u.id === user.id);

    if (index !== -1) {
      setIsFollowing(users[index].isFollowing);
    }
  }, [user.id]);

  return (
    <CardWrapper key={id}>
      <LogoWrapper>
        <LogoStyled />
      </LogoWrapper>
      <Thumb>
        <ImgStyled src={ImgCard} alt="pucture for card" />
      </Thumb>
      <Composition>
        <Line />
        <Circle>
          <Img src={avatar} alt="avatar" />
        </Circle>
        <Line />
      </Composition>
      <InfoBlock>
        <TextStyled>{name}</TextStyled>
        <TextStyled> {tweets} tweets</TextStyled>
        <TextStyled> {newFollowers} followers</TextStyled>
      </InfoBlock>
      <Button
        style={{ backgroundColor: newBgButton }}
        onClick={() => handleFollowClick(user.id)}
        text={newButton}
      >
        {newButton}
      </Button>
    </CardWrapper>
  );
};

export default UserCard;
