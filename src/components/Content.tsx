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
import DesktopMenu from './DesktopMenu';

const drawerWidth = 200;

const Content: React.FC = () => {
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
  return displayWidth >= 751 ? (
    <Box sx={{ marginLeft: '350px' }}></Box>
  ) : (
    <Box sx={{ marginLeft: '0vw' }}></Box>
  );
};

export default Content;
