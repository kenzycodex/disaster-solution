'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

export function Notifications(): React.JSX.Element {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader subheader="Manage your disaster notifications" title="Notification Settings" />
        <Divider />
        <CardContent>
          <Grid container spacing={6} wrap="wrap">
            <Grid md={4} sm={6} xs={12}>
              <Stack spacing={1}>
                <Typography variant="h6">Email Alerts</Typography>
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Severe Weather Alerts" />
                  <FormControlLabel control={<Checkbox />} label="Earthquake Alerts" />
                  <FormControlLabel control={<Checkbox />} label="Emergency Resource Updates" />
                  {/* New alert types */}
                  <FormControlLabel control={<Checkbox />} label="Flood Alerts" />
                  <FormControlLabel control={<Checkbox />} label="Wildfire Alerts" />
                  <FormControlLabel control={<Checkbox />} label="Evacuation Orders" />
                </FormGroup>
              </Stack>
            </Grid>
            <Grid md={4} sm={6} xs={12}>
              <Stack spacing={1}>
                <Typography variant="h6">Phone Alerts</Typography>
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Severe Weather Alerts" />
                  <FormControlLabel control={<Checkbox />} label="Earthquake Alerts" />
                  <FormControlLabel control={<Checkbox />} label="Emergency Resource Updates" />
                  {/* New alert types */}
                  <FormControlLabel control={<Checkbox />} label="Flood Alerts" />
                  <FormControlLabel control={<Checkbox />} label="Wildfire Alerts" />
                  <FormControlLabel control={<Checkbox />} label="Evacuation Orders" />
                </FormGroup>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">Save changes</Button>
        </CardActions>
      </Card>
    </form>
  );
}
