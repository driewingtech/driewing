import React from 'react';
import { Container } from 'react-bootstrap';
import HandmadeNavBar from './HandmadeNavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--paper-color)' }}>
      <HandmadeNavBar />
      {/* Add padding top to account for fixed navbar */}
      <div style={{ flex: 1, paddingTop: '100px' }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
