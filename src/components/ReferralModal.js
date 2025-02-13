import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  referrerName: yup.string().required('Name is required'),
  referrerEmail: yup.string().email('Invalid email').required('Email is required'),
  refereeName: yup.string().required('Referee name is required'),
  refereeEmail: yup.string().email('Invalid email').required('Referee email is required'),
  refereePhone: yup.string().required('Phone number is required'),
});

const ReferralModal = ({ open, onClose }) => {
  const formik = useFormik({
    initialValues: {
      referrerName: '',
      referrerEmail: '',
      refereeName: '',
      refereeEmail: '',
      refereePhone: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission here
      onClose();
    },
  });

  return (
    <Dialog 
  open={open} 
  onClose={onClose} 
  maxWidth="sm" 
  fullWidth
  PaperProps={{
    className: 'modal-content glass-effect',
    sx: {
      borderRadius: '16px',
      overflow: 'hidden'
    }
  }}
>
  <DialogTitle sx={{ 
    background: 'linear-gradient(45deg, #1976d2, #2196f3)',
    color: 'white',
    py: 3
  }}>
    Refer a Friend
  </DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              name="referrerName"
              label="Your Name"
              value={formik.values.referrerName}
              onChange={formik.handleChange}
              error={formik.touched.referrerName && Boolean(formik.errors.referrerName)}
              helperText={formik.touched.referrerName && formik.errors.referrerName}
            />
            <TextField
              fullWidth
              name="referrerEmail"
              label="Your Email"
              value={formik.values.referrerEmail}
              onChange={formik.handleChange}
              error={formik.touched.referrerEmail && Boolean(formik.errors.referrerEmail)}
              helperText={formik.touched.referrerEmail && formik.errors.referrerEmail}
            />
            <TextField
              fullWidth
              name="refereeName"
              label="Friend's Name"
              value={formik.values.refereeName}
              onChange={formik.handleChange}
              error={formik.touched.refereeName && Boolean(formik.errors.refereeName)}
              helperText={formik.touched.refereeName && formik.errors.refereeName}
            />
            <TextField
              fullWidth
              name="refereeEmail"
              label="Friend's Email"
              value={formik.values.refereeEmail}
              onChange={formik.handleChange}
              error={formik.touched.refereeEmail && Boolean(formik.errors.refereeEmail)}
              helperText={formik.touched.refereeEmail && formik.errors.refereeEmail}
            />
            <TextField
              fullWidth
              name="refereePhone"
              label="Friend's Phone Number"
              value={formik.values.refereePhone}
              onChange={formik.handleChange}
              error={formik.touched.refereePhone && Boolean(formik.errors.refereePhone)}
              helperText={formik.touched.refereePhone && formik.errors.refereePhone}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ReferralModal;