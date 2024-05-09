import React from 'react';
import Nav from '../Nav/Nav';

function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Nav />
      <div className="container mx-auto flex justify-center items-center h-full">
        {children}
      </div>
    </div>
  );
}

export default Layout;
