import { Box, Button, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage: React.FC = () => {
  return (
    <>
      <Box
        color="white"
        sx={{ marginLeft: 0, backgroundColor: 'ffffff' }}
      >
        <Typography
          variant="h5"
          fontWeight={'bolder'}
          mb={'3vh'}
        >
          ligmaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaa {window.innerWidth}
        </Typography>
        <Typography
          variant="h5"
          fontWeight={'bolder'}
          mb={'3vh'}
        >
          aaaaaaaaaaaaaaaaaaaaaaaaab {window.innerWidth}
        </Typography>
      </Box>
    </>
  );
};

export default Homepage;
