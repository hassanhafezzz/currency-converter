import React, { FC } from 'react';
import Header from './components/Header';

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Awesome currency convertor</h1>
      </main>
    </>
  );
};

export default App;
