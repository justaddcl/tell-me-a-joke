import React from 'react';

import GlobalStyles from './styles/GlobalStyles';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  );
};

export default Layout;
