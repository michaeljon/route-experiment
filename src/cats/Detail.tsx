import React from 'react';

export const CatDetail: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div>
      <h3>One of the cats</h3>
      <hr />
      <div>{`I am cat ${id}`}</div>
    </div>
  );
};
