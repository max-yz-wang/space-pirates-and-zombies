import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Root from './pages/Root';
import PageNotFound from './pages/PageNotFound';
import Factions from './pages/Factions';
import Sidebar from './components/Sidebar';
import {
  ThemeProvider,
  useTheme,
  ThemeOptions,
  createTheme,
} from '@mui/material/styles';

export const themeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e2b714',
    },
    secondary: {
      main: '#9d75cb',
    },
    background: {
      default: '#111111',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themeOptions}>
      <HashRouter>
        <Sidebar></Sidebar>
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
          <Route element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
