import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
} from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuOptions from './MenuOptions';

const CompactMenu: React.FC = () => {
  const [moji, setMoji] = React.useState('👽');
  const [drawerMenuOpen, setDrawerMenuOpen] = React.useState(false);

  React.useEffect(() => {
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        setMoji('🏴‍☠️');
        break;
      case 1:
        setMoji('🥷');
        break;
      default:
        console.log('🥷');
        break;
    }
  }, []);
  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerMenuOpen(newOpen);
  };

  return (
    <Box sx={{ flexGrow: 1, height: '35px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '35px',
          background: 'red',
          zIndex: 4041,
          position: 'relative',
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer(!drawerMenuOpen)}
          // disabled={open}
        >
          ☰
        </IconButton>
        <Drawer
          elevation={2}
          open={drawerMenuOpen}
        >
          <div style={{ marginTop: '35px' }}>
            <MenuOptions
              drawerMenuOpen={drawerMenuOpen}
              setDrawerMenuOpen={setDrawerMenuOpen}
            ></MenuOptions>
          </div>
        </Drawer>
        <button>spoilers</button>
      </div>
    </Box>
  );
};

export default CompactMenu;
