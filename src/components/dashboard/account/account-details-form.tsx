'use client';

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Unstable_Grid2';
import { countries, StateOption } from '@/types/countries-data'; // Updated file import to kebab case

export function AccountDetailsForm(): React.JSX.Element {
  const [selectedCountry, setSelectedCountry] = useState<string>('usa');
  const [selectedState, setSelectedState] = useState<string>('alabama');

  // Handle country change event and set state
  const handleCountryChange = (event: SelectChangeEvent<string>) => {
    const selectedCountryValue = event.target.value;
    setSelectedCountry(selectedCountryValue);
    setSelectedState(countries[selectedCountryValue][0].value); // Set default state when country changes
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader subheader="The information can be edited" title="Emergency Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid md={12} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Full Name</InputLabel>
                <OutlinedInput defaultValue="John Doe" label="Full Name" name="fullName" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Email Address</InputLabel>
                <OutlinedInput defaultValue="john.doe@example.com" label="Email Address" name="email" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Phone Number (Emergency Contact)</InputLabel>
                <OutlinedInput label="Phone Number" name="phone" type="tel" defaultValue="+1 555-555-5555" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Country</InputLabel>
                <Select value={selectedCountry} label="Country" name="country" onChange={handleCountryChange}>
                  {Object.keys(countries).map((countryKey) => (
                    <MenuItem key={countryKey} value={countryKey}>
                      {countryKey.charAt(0).toUpperCase() + countryKey.slice(1)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>State</InputLabel>
                <Select value={selectedState} label="State" name="state" variant="outlined">
                  {countries[selectedCountry]?.map((option: StateOption) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>City</InputLabel>
                <OutlinedInput label="City" defaultValue="New York" />
              </FormControl>
            </Grid>
            <Grid md={12} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Preferred Disaster Alert Type</InputLabel>
                <Select defaultValue="weather" label="Preferred Disaster Alert Type" name="alertType" variant="outlined">
                  <MenuItem value="weather">Severe Weather</MenuItem>
                  <MenuItem value="earthquake">Earthquake</MenuItem>
                  <MenuItem value="flood">Flood</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">Save Emergency Details</Button>
        </CardActions>
      </Card>
    </form>
  );
}
