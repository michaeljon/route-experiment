import React from 'react';

export const DogDetail: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div>
      <h3>One of the dogs</h3>
      <hr />
      <div>{`I am dog ${id}`}</div>
    </div>
  );
};
