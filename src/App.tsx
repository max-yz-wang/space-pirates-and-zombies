import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Root from './pages/Root';
import PageNotFound from './pages/PageNotFound';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Root />}
        />
        <Route
          path="/homepage"
          element={<Homepage />}
        />
        <Route element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
