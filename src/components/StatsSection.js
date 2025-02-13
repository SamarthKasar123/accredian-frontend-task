import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import PaymentsIcon from '@mui/icons-material/Payments';

const StatsSection = () => {
  const stats = [
    {
      icon: <PeopleIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      number: '10,000+',
      label: 'Successful Referrals'
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      number: '50+',
      label: 'Premium Courses'
    },
    {
      icon: <PaymentsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      number: '₹1.5M+',
      label: 'Rewards Distributed'
    }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper 
                elevation={0}
                className="hover-card"
                sx={{ p: 4, textAlign: 'center' }}
              >
                {stat.icon}
                <Typography 
                  variant="h3" 
                  sx={{ my: 2, fontWeight: 700, color: 'primary.main' }}
                >
                  {stat.number}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;