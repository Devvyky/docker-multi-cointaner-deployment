import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
export default () => {
  return (
    <div>
      In some other page!
      <Link to='/'>Go back home </Link>
    </div>
  );
};
