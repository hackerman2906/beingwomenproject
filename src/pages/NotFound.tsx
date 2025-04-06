import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 py-20">
      <h1 className="text-5xl font-bold text-secondary mb-6">404</h1>
      <p className="text-secondary/80 text-lg mb-8">
        Oops! The page you are looking for doesn't exist.
      </p>
      <Link to="/" className="px-6 py-3 bg-secondary text-primary rounded-full hover:bg-secondary/90 transition">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
