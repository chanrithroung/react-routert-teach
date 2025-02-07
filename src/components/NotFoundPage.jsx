import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 text-danger">404</h1>
        <p className="lead">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-muted">You might have entered the wrong URL or the page has been moved.</p>
        <Link className='btn btn-primary' to="/">Back to home page</Link>
      </div>
    </div>
  );
};

export default NotFound;