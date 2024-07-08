import React from 'react';
import './All.css'
const PostCard = ({ content }) => {
  return (
    <div className="post">
      <p>{content}</p>
    </div>
  );
};

export default PostCard;
