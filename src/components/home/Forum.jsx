import React from 'react';
import {PostCard} from './PostCard';

const Forum = () => {
  return (
    <div className="forum">
      <h2>Foro</h2>
      <PostCard content="Post 1" />
      <PostCard content="Post 2" />
      {/* Agregar más posts según sea necesario */}
    </div>
  );
};

export default Forum;
