'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export function UpdateAccountForm(): React.JSX.Element {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader subheader="Manage your account settings" title="Account Settings" />
        <Divider />
        <CardContent>
          <Stack spacing={3} sx={{ maxWidth: 'sm' }}>
            {/* Email Field */}
            <FormControl fullWidth>
              <InputLabel>Email</InputLabel>
              <OutlinedInput label="Email" name="email" type="email" />
            </FormControl>

            {/* Phone Number Field */}
            <FormControl fullWidth>
              <InputLabel>Phone Number</InputLabel>
              <OutlinedInput label="Phone Number" name="phoneNumber" type="tel" />
            </FormControl>

            {/* Password Field */}
            <FormControl fullWidth>
              <InputLabel>Password</InputLabel>
              <OutlinedInput label="Password" name="password" type="password" />
            </FormControl>

            {/* Confirm Password Field */}
            <FormControl fullWidth>
              <InputLabel>Confirm Password</InputLabel>
              <OutlinedInput label="Confirm Password" name="confirmPassword" type="password" />
            </FormControl>

            {/* Two-Factor Authentication */}
            <FormControlLabel
              control={<Switch name="twoFactorAuth" />}
              label="Enable Two-Factor Authentication"
            />
          </Stack>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">Update</Button>
        </CardActions>
      </Card>
    </form>
  );
}
