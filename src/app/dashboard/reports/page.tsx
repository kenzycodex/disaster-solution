import * as React from 'react';
import type { Metadata } from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import dayjs from 'dayjs';

// Material UI Icons
import HurricaneIcon from '@mui/icons-material/Tsunami'; // Using "Tsunami" icon for hurricanes
import EarthquakeIcon from '@mui/icons-material/AltRoute'; // A path icon to represent earthquake paths
import FloodIcon from '@mui/icons-material/Waves'; // Water waves to represent flood
import FireIcon from '@mui/icons-material/Fireplace'; // Fireplace for fire-related reports

import { config } from '@/config';
import { DisasterReportsFilters } from '@/components/dashboard/report/disaster-report-filters'; // Updated filter component
import { DisasterReportsTable } from '@/components/dashboard/report/disaster-reports-table'; // Updated table component
import type { DisasterReport } from '@/components/dashboard/report/disaster-reports-table';

export const metadata = { title: `Disaster Reports | Dashboard | ${config.site.name}` } satisfies Metadata;

// Example disaster preparedness reports data with real-world disaster reports and locations (Lagos, Nigeria, USA, Ghana, and more)
const disasterReports = [
  {
    id: 'REP-001',
    reportTitle: 'Hurricane Preparedness Report',
    icon: <HurricaneIcon />, // Using Material UI icon for Hurricane
    disasterType: 'Hurricane',
    location: 'Florida, USA', // Location added
    status: 'Active',
    submittedOn: dayjs().subtract(1, 'day').toDate(),
  },
  {
    id: 'REP-002',
    reportTitle: 'Earthquake Safety Report',
    icon: <EarthquakeIcon />, // Using Material UI icon for Earthquake
    disasterType: 'Earthquake',
    location: 'San Francisco, USA', // Location added
    status: 'Pending',
    submittedOn: dayjs().subtract(2, 'days').toDate(),
  },
  {
    id: 'REP-003',
    reportTitle: 'Flood Response Assessment',
    icon: <FloodIcon />, // Using Material UI icon for Flood
    disasterType: 'Flood',
    location: 'Lagos, Nigeria', // Location added
    status: 'Completed',
    submittedOn: dayjs().subtract(1, 'week').toDate(),
  },
  {
    id: 'REP-004',
    reportTitle: 'Fire Evacuation Plan',
    icon: <FireIcon />, // Using Material UI icon for Fire
    disasterType: 'Fire',
    location: 'Accra, Ghana', // Location added
    status: 'Draft',
    submittedOn: dayjs().subtract(3, 'weeks').toDate(),
  },
  {
    id: 'REP-005',
    reportTitle: 'Cyclone Emergency Measures',
    icon: <HurricaneIcon />, // Using Material UI icon for Cyclone
    disasterType: 'Cyclone',
    location: 'Chennai, India',
    status: 'Active',
    submittedOn: dayjs().subtract(5, 'days').toDate(),
  },
  {
    id: 'REP-006',
    reportTitle: 'Tornado Preparedness Report',
    icon: <HurricaneIcon />, // Using Material UI icon for Tornado
    disasterType: 'Tornado',
    location: 'Oklahoma, USA',
    status: 'Pending',
    submittedOn: dayjs().subtract(2, 'weeks').toDate(),
  },
  {
    id: 'REP-007',
    reportTitle: 'Landslide Risk Assessment',
    icon: <EarthquakeIcon />, // Using Material UI icon for Landslide
    disasterType: 'Landslide',
    location: 'Kano, Nigeria',
    status: 'Completed',
    submittedOn: dayjs().subtract(3, 'weeks').toDate(),
  },
  {
    id: 'REP-008',
    reportTitle: 'Earthquake Damage Control',
    icon: <EarthquakeIcon />, // Using Material UI icon for Earthquake
    disasterType: 'Earthquake',
    location: 'Kathmandu, Nepal',
    status: 'Draft',
    submittedOn: dayjs().subtract(4, 'weeks').toDate(),
  },
  {
    id: 'REP-009',
    reportTitle: 'Flood Preparedness in Coastal Areas',
    icon: <FloodIcon />, // Using Material UI icon for Flood
    disasterType: 'Flood',
    location: 'New Orleans, USA',
    status: 'Completed',
    submittedOn: dayjs().subtract(1, 'month').toDate(),
  },
  {
    id: 'REP-010',
    reportTitle: 'Wildfire Response Plan',
    icon: <FireIcon />, // Using Material UI icon for Fire
    disasterType: 'Wildfire',
    location: 'California, USA',
    status: 'Active',
    submittedOn: dayjs().subtract(6, 'days').toDate(),
  },
  {
    id: 'REP-011',
    reportTitle: 'Tsunami Emergency Response',
    icon: <HurricaneIcon />, // Using Material UI icon for Tsunami
    disasterType: 'Tsunami',
    location: 'Tokyo, Japan',
    status: 'Pending',
    submittedOn: dayjs().subtract(1, 'week').toDate(),
  },
] satisfies DisasterReport[];

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedReports = applyPagination(disasterReports, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Disaster Reports</Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
              Import Reports
            </Button>
            <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Export Reports
            </Button>
          </Stack>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add New Report
          </Button>
        </div>
      </Stack>
      <DisasterReportsFilters /> {/* Updated filter component */}
      <DisasterReportsTable
        count={paginatedReports.length}
        page={page}
        rows={paginatedReports}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(rows: DisasterReport[], page: number, rowsPerPage: number): DisasterReport[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
