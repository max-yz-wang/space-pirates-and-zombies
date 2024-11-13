import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Root from './pages/Root';
import PageNotFound from './pages/PageNotFound';
import Factions from './pages/Factions';
const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Root />}
        />
        <Route
          path="/homepage"
          element={<Homepage />}
        />
        <Route
          path="/factions"
          element={<Factions />}
        />
        <h1>ligma</h1>
        <Route element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
