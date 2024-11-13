import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Root: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/homepage');
  }, []);
  return (
    <>
      <h1>hallo</h1>
    </>
  );
};

export default Root;
