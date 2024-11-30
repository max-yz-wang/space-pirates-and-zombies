import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  Toolbar,
} from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuOptions from './MenuOptions';

const DesktopMenu: React.FC = () => {
  return (
    <div
      style={{
        width: '350px',
        minHeight: '100vh',
        display: 'flex',
        position: 'fixed',
        zIndex: 0,
        borderRight: 'solid',
        borderWidth: 2,
        borderColor: '#3e3e3e',
        backgroundColor: '#111111',
        color: '#FFFFFF',
      }}
    >
      <MenuOptions></MenuOptions>
    </div>
  );
};

export default DesktopMenu;
