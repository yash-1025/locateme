import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import MainApp from './MainApp';

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div>
      {!loadingComplete ? (
        <LandingPage onComplete={() => setLoadingComplete(true)} />
      ) : (
        <MainApp />
      )}
    </div>
  );
};

export default App;