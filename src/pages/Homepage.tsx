import { Box, Button, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Content from '../components/Content';

const Homepage: React.FC = () => {
  return (
    <>
      <Content></Content>
      <Box
        color="white"
        sx={{ marginLeft: 0, backgroundColor: 'ffffff' }}
      >
        <Typography
          variant="h5"
          fontWeight={'bolder'}
        ></Typography>
        <Typography
          variant="h5"
          fontWeight={'bolder'}
          color="black"
        >
          hello everynyan
        </Typography>
      </Box>
      aaa
    </>
  );
};

export default Homepage;
