import React, { useState } from 'react';
import HeroImage from './HeroImage';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import ReferralModal from './ReferralModal';
import HowItWorks from './HowItWorks';
import BenefitsTable from './BenefitsTable';

const ReferEarnPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box className="hero-section animate-fade-in">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(45deg, #1976d2, #2196f3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Let's Learn & Earn
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              paragraph
              sx={{ mb: 4 }}
            >
              Get a chance to win up to <span style={{ color: '#1976d2', fontWeight: 600 }}>Rs. 15,000</span>
            </Typography>
            <Button
              className="refer-button animate-float"
              variant="contained"
              size="large"
              onClick={handleOpenModal}
              startIcon={<ShareIcon />}
            >
              Refer Now
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <HeroImage />
          </Grid>
        </Grid>
      </Box>

      {/* How it Works Section */}
      <HowItWorks />

      {/* Benefits Section */}
      <BenefitsTable />

      {/* Referral Modal */}
      <ReferralModal open={openModal} onClose={handleCloseModal} />
    </Container>
  );
};

export default ReferEarnPage;