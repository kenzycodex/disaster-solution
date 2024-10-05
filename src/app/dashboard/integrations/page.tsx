import * as React from 'react';
import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import { ShieldWarning as ShieldIcon } from '@phosphor-icons/react/dist/ssr/ShieldWarning';
import { FirstAid as FirstAidIcon } from '@phosphor-icons/react/dist/ssr/FirstAid';
import { Tornado as TornadoIcon } from '@phosphor-icons/react/dist/ssr/Tornado';
import { Fire as FireIcon } from '@phosphor-icons/react/dist/ssr/Fire';
import dayjs from 'dayjs';

// Importing WaterDrop icon from react-icons
import { RiWaterDropLine as WaterDropIcon } from 'react-icons/ri';

import { config } from '@/config';
import { IntegrationCard } from '@/components/dashboard/integrations/integrations-card';
import type { Integration } from '@/components/dashboard/integrations/integrations-card';
import { CompaniesFilters } from '@/components/dashboard/integrations/integrations-filters';

export const metadata = { title: `Resources | Disaster Preparedness | ${config.site.name}` } satisfies Metadata;

// Updated resources data
const resources = [
  {
    id: 'RESOURCE-001',
    title: 'Emergency Kit Preparation',
    description: 'Guidelines on assembling a complete emergency kit with essential supplies for disaster survival.',
    logo: <FirstAidIcon fontSize="var(--icon-fontSize-lg)" />, // Use a meaningful icon
    installs: 1024,
    updatedAt: dayjs().subtract(15, 'minute').toDate(),
  },
  {
    id: 'RESOURCE-002',
    title: 'Earthquake Safety Tips',
    description: 'Instructions for staying safe during and after an earthquake, including evacuation plans.',
    logo: <ShieldIcon fontSize="var(--icon-fontSize-lg)" />, // Use an icon for safety
    installs: 825,
    updatedAt: dayjs().subtract(1, 'hour').toDate(),
  },
  {
    id: 'RESOURCE-003',
    title: 'Flood Preparedness Guide',
    description: 'Learn how to prepare for floods, including creating evacuation routes and securing your home.',
    logo: <WaterDropIcon fontSize="var(--icon-fontSize-lg)" />, // Replaced with react-icons WaterDrop
    installs: 903,
    updatedAt: dayjs().subtract(2, 'hour').toDate(),
  },
  {
    id: 'RESOURCE-004',
    title: 'Fire Safety Protocol',
    description: 'Steps to take to prevent fires and stay safe during a fire-related emergency.',
    logo: <FireIcon fontSize="var(--icon-fontSize-lg)" />, // Use fire icon
    installs: 740,
    updatedAt: dayjs().subtract(1, 'day').toDate(),
  },
  {
    id: 'RESOURCE-005',
    title: 'Hurricane Preparedness Plan',
    description: 'A complete plan for preparing your home and family for hurricanes, including shelter options.',
    logo: <TornadoIcon fontSize="var(--icon-fontSize-lg)" />, // Use tornado icon for hurricane context
    installs: 610,
    updatedAt: dayjs().subtract(3, 'day').toDate(),
  },
  {
    id: 'RESOURCE-006',
    title: 'First Aid Procedures',
    description: 'Basic first aid procedures to follow during emergencies, including CPR and wound care.',
    logo: <FirstAidIcon fontSize="var(--icon-fontSize-lg)" />, // Use first aid icon
    installs: 453,
    updatedAt: dayjs().subtract(5, 'day').toDate(),
  },
  {
    id: 'RESOURCE-007',
    title: 'Tornado Safety Measures',
    description: 'Detailed measures to take before, during, and after a tornado, including safe zones and warning signs.',
    logo: <TornadoIcon fontSize="var(--icon-fontSize-lg)" />, // Use tornado icon
    installs: 390,
    updatedAt: dayjs().subtract(10, 'day').toDate(),
  },
  {
    id: 'RESOURCE-008',
    title: 'Drought Preparedness',
    description: 'Instructions on how to conserve water and prepare your household for extended periods of drought.',
    logo: <WaterDropIcon fontSize="var(--icon-fontSize-lg)" />, // Replaced with react-icons WaterDrop
    installs: 220,
    updatedAt: dayjs().subtract(15, 'day').toDate(),
  },
  {
    id: 'RESOURCE-009',
    title: 'Wildfire Evacuation Plan',
    description: 'Create an evacuation plan to stay safe during wildfires and avoid fire hazards.',
    logo: <FireIcon fontSize="var(--icon-fontSize-lg)" />, // Use fire icon
    installs: 505,
    updatedAt: dayjs().subtract(20, 'day').toDate(),
  },
  {
    id: 'RESOURCE-010',
    title: 'Pandemic Safety Protocols',
    description: 'Health and safety protocols to follow during pandemics, including hygiene and social distancing measures.',
    logo: <ShieldIcon fontSize="var(--icon-fontSize-lg)" />, // Use shield icon for safety
    installs: 320,
    updatedAt: dayjs().subtract(30, 'day').toDate(),
  },
] satisfies Integration[];

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Disaster Preparedness Resources</Typography>
          <Stack sx={{ alignItems: 'center' }} direction="row" spacing={1}>
            <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
              Upload Resource
            </Button>
            <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Download All
            </Button>
          </Stack>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add New Resource
          </Button>
        </div>
      </Stack>
      <CompaniesFilters />
      <Grid container spacing={3}>
        {resources.map((resource) => (
          <Grid key={resource.id} lg={4} md={6} xs={12}>
            <IntegrationCard integration={resource} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination count={3} size="small" />
      </Box>
    </Stack>
  );
}
