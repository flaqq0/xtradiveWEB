import React from 'react';

const SidebarItem = ({ label, onClick }) => {
  return (
    <li onClick={onClick}>
      {label}
    </li>
  );
};

export default SidebarItem;
