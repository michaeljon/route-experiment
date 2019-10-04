import React from 'react';
import { Link } from 'react-router-dom';

const getLabel = (label?: string) => {
  return { __html: label || '' };
};

export const DogList: React.FC = () => {
  const range = (n: number) => Array.from({ length: n }, (_, key) => key);

  return (
    <div>
      <h3>All of the dogs</h3>
      <hr />
      <ul style={{ listStyle: 'none' }}>
        {range(7).map(r => (
          <li key={r}>
            <Link to={`/dogs/${r + 1}`}>
              <span dangerouslySetInnerHTML={getLabel(`&#x1F436; Go to dog ${r + 1}`)} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
