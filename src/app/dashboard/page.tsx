import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';

import { config } from '@/config';
import { Alert } from '@/components/dashboard/overview/alert';
import { AlertTimeline } from '@/components/dashboard/overview/alert-timeline';
import { PreparedStatus } from '@/components/dashboard/overview/prepared-status';
import { ActiveRisks } from '@/components/dashboard/overview/active-risks';
import { TotalResources } from '@/components/dashboard/overview/total-resources';
import { Danger } from '@/components/dashboard/overview/danger';
import { DisasterMap } from '@/components/dashboard/overview/disaster-map';
import { LatestDisasterReports } from '@/components/dashboard/overview/latest-disaster-reports';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid lg={3} sm={6} xs={12}>
        <Alert diff={15} trend="up" sx={{ height: '100%' }} value="20 alerts" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <ActiveRisks diff={12} trend="down" sx={{ height: '100%' }} value="3 risks" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <PreparedStatus sx={{ height: '100%' }} value={65} />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TotalResources sx={{ height: '100%' }} value="10 resources" />
      </Grid>
      <Grid lg={8} xs={12}>
        <AlertTimeline
          chartSeries={[
            { name: 'This year', data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20] },
            { name: 'Last year', data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <Danger chartSeries={[63, 15, 22]} labels={['Desktop', 'Tablet', 'Phone']} sx={{ height: '100%' }} />
      </Grid>
      <Grid lg={8} md={6} xs={12}>
        <DisasterMap 
          markers={[
            { position: [51.505, -0.09], description: 'Flood in London' },
            { position: [34.0522, -118.2437], description: 'Wildfire in LA' },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid lg={8} md={12} xs={12}>
        <LatestDisasterReports
          reports={[
            {
              id: 'RPT-007',
              location: 'London',
              severity: 'severe', 
              description: 'Flood affecting multiple districts',
              reportedAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'RPT-006',
              location: 'California',
              severity: 'critical', 
              description: 'Wildfire spreading across northern regions',
              reportedAt: dayjs().subtract(20, 'minutes').toDate(),
            },
            {
              id: 'RPT-004',
              location: 'Tokyo',
              severity: 'moderate',
              description: 'Earthquake with minor damage reported',
              reportedAt: dayjs().subtract(30, 'minutes').toDate(),
            },
            {
              id: 'RPT-003',
              location: 'Florida',
              severity: 'critical',
              description: 'Hurricane warning issued for coastal areas',
              reportedAt: dayjs().subtract(40, 'minutes').toDate(),
            },
            {
              id: 'RPT-002',
              location: 'Sydney',
              severity: 'mild',
              description: 'Bushfire contained in outer suburbs',
              reportedAt: dayjs().subtract(50, 'minutes').toDate(),
            },
            {
              id: 'RPT-001',
              location: 'Berlin',
              severity: 'moderate',
              description: 'Severe storm warnings for the city',
              reportedAt: dayjs().subtract(60, 'minutes').toDate(),
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>        
    </Grid>
  );
}
