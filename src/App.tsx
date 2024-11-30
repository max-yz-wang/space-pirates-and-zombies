import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Root from './pages/Root';
import PageNotFound from './pages/PageNotFound';
import Factions from './pages/Factions';
import './index.css';
import './index.js';
import {
  ThemeProvider,
  useTheme,
  ThemeOptions,
  createTheme,
} from '@mui/material/styles';
import PageMenu from './components/PageMenu';

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
  const [open, setOpen] = React.useState(false);
  const [displayWidth, setDisplayWidth] = React.useState(window.innerWidth);

  const [token, setToken] = React.useState<string>(
    localStorage.getItem('token') as string
  );
  const handleResize = () => {
    setDisplayWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div
      className="index"
      style={
        displayWidth >= 751
          ? { display: 'flex', flexDirection: 'row' }
          : {
              display: 'flex',
              flexDirection: 'column',
            }
      }
    >
      {/* <ThemeProvider theme={themeOptions}> */}
      <HashRouter>
        <PageMenu></PageMenu>
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
            path="/setting"
            element={<Factions />}
          />
          <Route
            path="/setting/:faction"
            element={<Factions />}
          />
          <Route element={<PageNotFound />} />
        </Routes>
      </HashRouter>
      {/* </ThemeProvider> */}
    </div>
  );
};

export default App;
