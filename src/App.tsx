import React, { FC } from 'react';
import Header from './components/Header';
import Converter from './components/Converter';

const App: FC = () => {
  return (
    <>
      <Header />
      <main role="main">
        <Converter />
      </main>
    </>
  );
};

export default App;
