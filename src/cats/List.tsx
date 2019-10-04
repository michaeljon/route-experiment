import React from 'react';
import { Link } from 'react-router-dom';

const getLabel = (label?: string) => {
  return { __html: label || '' };
};

export const CatList: React.FC = () => {
  const range = (n: number) => Array.from({ length: n }, (_, key) => key);

  return (
    <div>
      <h3>All of the cats</h3>
      <hr />
      <ul style={{ listStyle: 'none' }}>
        {range(3).map(r => (
          <li key={r}>
            <Link to={`/cats/${r + 1}`}>
              <span dangerouslySetInnerHTML={getLabel(`&#x1F640; Go to cat ${r + 1}`)} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
