import React, { useEffect, useState } from 'react';

import { getUsers } from 'ApiService/api';
import Dropdown from '../Dropdown';
import UserCard from '../UserCard';
import Container from '../utils/Container';
import Loader from '../utils/Loader';
import { List, TitleList } from './UserList.styled';
import Button from '../utils/Button';
import ScrollButton from '../utils/ScrollToTopButton';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [visibleUsers, setVisibleUsers] = useState(3);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await getUsers();

        localStorage.setItem('users', JSON.stringify(data));
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      const parsedUsers = JSON.parse(savedUsers);
      setUsers(parsedUsers);
      setLoading(false);
    } else {
      fetchUsers();
    }
  }, []);

  const filteredUsers =
    filter === 'all'
      ? users.slice(0, visibleUsers)
      : users
          .filter(user =>
            filter === '!isFollowing' ? !user.isFollowing : user.isFollowing
          )
          .slice(0, visibleUsers);

  const loadMoreUsers = () => {
    setVisibleUsers(prevCount => prevCount + 3);
  };

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          {filteredUsers.length > 0 && (
            <>
              <Dropdown
                value={filter}
                onChange={e => setFilter(e.target.value)}
              />
              <List>
                {filteredUsers.map(user => (
                  <UserCard key={user.id} user={user} />
                ))}
              </List>
            </>
          )}
          {users.length === 0 && (
            <TitleList>Sorry, there are no Users</TitleList>
          )}
        </>
      )}
      {visibleUsers < users.length && (
        <Button
          onClick={loadMoreUsers}
          style={{ marginBottom: '20px' }}
          text={'Load More'}
        >
          Load More
        </Button>
      )}
      {visibleUsers > 3 && <ScrollButton />}
    </Container>
  );
};

export default UserList;
