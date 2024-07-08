import React from 'react';
import './All.css'
import {SidebarItem} from './SidebarItem';

const Sidebar = ({ setSelectedPage }) => {
  return (
    <div className="sidebar">
      <h3>Administración</h3>
      <ul>
        <SidebarItem label="Universidades" onClick={() => setSelectedPage('Universidades')} />
        <SidebarItem label="Foros" onClick={() => setSelectedPage('Foros')} />
      </ul>
    </div>
  );
};

export default Sidebar;
