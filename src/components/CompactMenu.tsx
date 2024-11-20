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

const CompactMenu: React.FC = () => {
  const [moji, setMoji] = React.useState('👽');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
    console.log('aaa');
    console.log(open);
  };

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
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: '100vw', marginTop: '35px' }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? '<InboxIcon />' : '<MailIcon />'}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? 'a' : 'b'}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
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
          onClick={toggleDrawer(!open)}
          // disabled={open}
        >
          ☰
        </IconButton>
        <Drawer
          elevation={2}
          open={open}
        >
          {DrawerList}
        </Drawer>
        <button>spoilers</button>
      </div>
    </Box>
  );
};

export default CompactMenu;
