import { Link } from 'react-router-dom';
import {
  HomeContainer,
  Thumb,
  Text,
  Button,
} from 'pages/HomePage/HomePage.styled';

import { BsTwitter } from 'react-icons/bs';

const HomePage = () => {
  return (
    <HomeContainer>
      <Thumb>
        <Text>Find the tweets you need.</Text>
        <Link to="/tweets">
          <Button>
            <BsTwitter />
            Tweets
          </Button>
        </Link>
      </Thumb>
    </HomeContainer>
  );
};

export default HomePage;
