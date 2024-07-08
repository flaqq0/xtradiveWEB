import React from 'react';

const PostCard = ({ content }) => {
  return (
    <div className="post">
      <p>{content}</p>
    </div>
  );
};

export default PostCard;
