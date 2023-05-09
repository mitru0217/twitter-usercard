import React from 'react';

import { Select } from './Dropdown.styled';

const Dropdown = ({ value, onChange }) => {
  return (
    <Select value={value} onChange={onChange}>
      <option value="all">all</option>
      <option value="!isFollowing">follow</option>
      <option value="isFollowing">following</option>
    </Select>
  );
};

export default Dropdown;
