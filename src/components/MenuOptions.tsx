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

interface MenuOptionsProps {
  drawerMenuOpen?: boolean;
  setDrawerMenuOpen?: (isOpen: boolean) => void;
}

const MenuOptions: React.FC<MenuOptionsProps> = ({
  drawerMenuOpen = true,
  setDrawerMenuOpen = () => {},
}) => {
  const factions = ['pirates', 'zombies', 'ninjas', 'clowns'];
  const summary = ['session 0', 'session 1', 'session 2'];
  const dm_notes = ['session 0', 'session 1', 'session 2', 'notes'];
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
    localStorage.setItem('factions', JSON.stringify(!open));
  };

  const handleNavigation = (url: string) => {
    navigate(url);
    console.log(drawerMenuOpen);
    setDrawerMenuOpen(false);
  };
  React.useEffect(() => {
    var factionDropdown = localStorage.getItem('factions');
    if (factionDropdown === null) setOpen(false);
    else setOpen(JSON.parse(factionDropdown));
  }, []);
  return (
    <>
      <div
        style={{
          paddingTop: '5vh',
          paddingBottom: '5vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingLeft: '5vw',
        }}
      >
        <div>
          <h1 onClick={() => navigate('/homepage')}>spazanac</h1>
          <div>
            <button onClick={handleOpen}>factions</button>
            <div style={open ? { display: 'block' } : { display: 'none' }}>
              {factions.map((faction, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => handleNavigation('setting/' + faction)}
                  >
                    {faction}
                  </li>
                );
              })}
            </div>
            <h6>hallo</h6>
          </div>
        </div>
        <div>
          <h6>session summary</h6>
          <ul>
            <li>eee</li>
            <li>fff</li>
            <li>ggg</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuOptions;
