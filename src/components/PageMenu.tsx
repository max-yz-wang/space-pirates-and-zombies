import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CompactMenu from './CompactMenu';

const drawerWidth = 200;

const PageMenu: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [displayWidth, setDisplayWidth] = React.useState(window.innerWidth);
  const handleResize = () => {
    setDisplayWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return displayWidth > 600 ? (
    <CompactMenu></CompactMenu>
  ) : (
    <CompactMenu></CompactMenu>
  );
};

export default PageMenu;
