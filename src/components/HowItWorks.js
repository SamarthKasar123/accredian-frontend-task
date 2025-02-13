import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
} from '@mui/material';

const HowItWorks = () => {
  const steps = [
    {
      icon: '/assets/images/refer-step1.svg',
      title: 'Submit referrals easily',
      description: 'Submit referrals easily via our website\'s referral section.'
    },
    {
      icon: '/assets/images/refer-step2.svg',
      title: 'Earn rewards',
      description: 'Earn rewards once your referral joins an Accredian program.'
    },
    {
      icon: '/assets/images/refer-step3.svg',
      title: 'Receive bonus',
      description: 'Referrer receives a bonus 30 days after program enrollment.'
    }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'rgba(25, 118, 210, 0.02)' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom
          sx={{ 
            mb: 6, 
            fontWeight: 700,
            background: 'linear-gradient(45deg, #1976d2, #2196f3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          How It Works
        </Typography>
        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper 
                elevation={0}
                className="hover-card"
                sx={{ 
                  p: 4, 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Box
                  component="img"
                  src={step.icon}
                  alt={step.title}
                  sx={{
                    width: 120,
                    height: 120,
                    mb: 3,
                    animation: 'floatAnimation 3s ease-in-out infinite',
                  }}
                />
                <Typography 
                  variant="h5" 
                  component="h3" 
                  gutterBottom
                  sx={{ fontWeight: 600, color: 'primary.main' }}
                >
                  {step.title}
                </Typography>
                <Typography color="text.secondary">
                  {step.description}
                </Typography>
                {index < steps.length - 1 && (
                  <Box
                    sx={{
                      position: 'absolute',
                      right: -30,
                      top: '40%',
                      display: { xs: 'none', md: 'block' },
                    }}
                  >
                    <img 
                      src="/assets/images/arrow-right.svg" 
                      alt="arrow" 
                      style={{ width: '50px' }}
                    />
                  </Box>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;