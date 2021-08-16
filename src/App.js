import React from 'react';
import './App.css';
import Cars from './Cars';
import GlobalProvider from './providers/GlobalProvider';

function App() {
  return (
    <GlobalProvider>
      <Cars />
    </GlobalProvider>
  );
}

export default App;
