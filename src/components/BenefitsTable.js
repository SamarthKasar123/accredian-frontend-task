import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
  Switch,
  FormControlLabel,
} from '@mui/material';

const BenefitsTable = () => {
  const [showEnrolled, setShowEnrolled] = useState(false);

  const programs = [
    {
      name: 'Professional Certificate Program in Product Management',
      referrerBonus: 7000,
      refereeBonus: 9000,
    },
    {
      name: 'PG Certificate Program in Strategic Product Management',
      referrerBonus: 9000,
      refereeBonus: 11000,
    },
    {
      name: 'Executive Program in Data Driven Product Management',
      referrerBonus: 10000,
      refereeBonus: 10000,
    },
    {
      name: 'Executive Program in Product Management and Digital Transformation',
      referrerBonus: 10000,
      refereeBonus: 10000,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
        What Are The <span style={{ color: '#1976d2' }}>Referral Benefits</span>?
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <FormControlLabel
          control={
            <Switch
              checked={showEnrolled}
              onChange={(e) => setShowEnrolled(e.target.checked)}
              color="primary"
            />
          }
          label="Enrolled"
        />
      </Box>

      <TableContainer component={Paper} elevation={2}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>Programs</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                Referrer Bonus
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                Referee Bonus
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {programs.map((program, index) => (
              <TableRow key={index}>
                <TableCell>{program.name}</TableCell>
                <TableCell align="right">₹{program.referrerBonus}</TableCell>
                <TableCell align="right">₹{program.refereeBonus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default BenefitsTable;