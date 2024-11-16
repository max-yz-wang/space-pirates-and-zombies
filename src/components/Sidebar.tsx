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

const drawerWidth = 200;

const Sidebar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      {window.innerWidth > 600 ? (
        <div>
          <Box>
            <Drawer
              variant="permanent"
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                },
              }}
            >
              <Toolbar />

              <Box sx={{ overflow: 'auto' }}>
                <List>
                  {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                    (text, index) => (
                      <ListItem
                        key={text}
                        disablePadding
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            {index % 2 === 0 ? <h1>a</h1> : <h1>b</h1>}
                          </ListItemIcon>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    )
                  )}
                </List>
                <Divider />
                <List>
                  {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem
                      key={text}
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          {index % 2 === 0 ? <h1>a</h1> : <h1>b</h1>}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>
        </div>
      ) : (
        <></>
      )}
      <Toolbar />
    </Box>
  );
};

export default Sidebar;
