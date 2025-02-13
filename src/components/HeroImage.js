import React from 'react';
import { Box } from '@mui/material';

const HeroImage = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '200px',
          height: '200px',
          background: 'url(./assets/images/pattern-bg.svg)',
          opacity: 0.1,
          zIndex: -1,
        }
      }}
    >
      <Box
        component="img"
        src="./assets/images/hero-image.png"
        alt="Refer and Earn"
        sx={{
          width: '100%',
          maxWidth: 600,
          height: 'auto',
          transform: 'scale(1.1)',
          animation: 'floatAnimation 3s ease-in-out infinite',
          filter: 'drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1))',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.15)',
          }
        }}
      />
    </Box>
  );
};

export default HeroImage;