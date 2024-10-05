import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import { FaHospital, FaHome, FaSatelliteDish, FaWater, FaFireExtinguisher, FaUmbrella } from 'react-icons/fa'; 
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
import { LatestEmergencyResources } from '@/components/dashboard/overview/latest-emergency-resources';

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
        <Danger chartSeries={[63, 15, 22]} labels={['Flood', 'Earthquakes', 'Wildfire']} sx={{ height: '100%' }} />
      </Grid>
      <Grid lg={4} md={12} xs={12}>
        <LatestEmergencyResources
          resources={[
            {
              id: 'RES-001',
              icon: <FaHome size={24} color="green" />, // Shelter icon
              name: 'Community Shelter - Downtown',
              address: '123 Main St, Downtown City',
              updatedAt: dayjs().subtract(30, 'minutes').toDate(),
              type: 'Shelter',
              status: 'Operational',
            },
            {
              id: 'RES-002',
              icon: <FaHospital size={24} color="red" />, // Hospital icon
              name: 'General Hospital',
              address: '456 Central Ave, Uptown City',
              updatedAt: dayjs().subtract(1, 'hour').toDate(),
              type: 'Hospital',
              status: 'Partially Operational',
            },
            {
              id: 'RES-003',
              icon: <FaSatelliteDish size={24} color="blue" />, // NASA resource icon
              name: 'NASA - Climate Data Center',
              address: 'NASA HQ, Washington, D.C.',
              updatedAt: dayjs().subtract(2, 'hours').toDate(),
              type: 'NASA Resource',
              status: 'Operational',
            },
            {
              id: 'RES-004',
              icon: <FaWater size={24} color="blue" />, // Flood icon
              name: 'Flood Relief Center',
              address: '789 River Rd, Riverside City',
              updatedAt: dayjs().subtract(45, 'minutes').toDate(),
              type: 'Flood Resource',
              status: 'Operational',
            },
            {
              id: 'RES-005',
              icon: <FaFireExtinguisher size={24} color="orange" />, // Fire resource icon
              name: 'Fire Response Unit - Northside',
              address: '321 Blaze Ave, North City',
              updatedAt: dayjs().subtract(3, 'hours').toDate(),
              type: 'Fire Response',
              status: 'Operational',
            },
            {
              id: 'RES-006',
              icon: <FaUmbrella size={24} color="purple" />, // Storm shelter icon
              name: 'Storm Shelter - West Valley',
              address: '654 Rain St, West Valley',
              updatedAt: dayjs().subtract(20, 'minutes').toDate(),
              type: 'Storm Shelter',
              status: 'Operational',
            },
            {
              id: 'RES-007',
              icon: <FaHospital size={24} color="green" />, // Hospital icon for another hospital
              name: 'Emergency Clinic - Southside',
              address: '876 Health St, South City',
              updatedAt: dayjs().subtract(4, 'hours').toDate(),
              type: 'Hospital',
              status: 'Partially Operational',
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid lg={8} md={6} xs={12}>
        <DisasterMap 
          markers={[
            { position: [51.505, -0.09], description: 'Flood in London' },  // Existing marker
            { position: [34.0522, -118.2437], description: 'Wildfire in LA' }, // Existing marker
            { position: [6.5244, 3.3792], description: 'Coastal flooding due to heavy rains in Lagos, Nigeria' },  // Lagos marker
            { position: [6.4531, 3.3958], description: 'Severe traffic disruption and flash floods in Victoria Island, Lagos' },  // Lagos marker
            { position: [6.5244, 3.3676], description: 'Ongoing efforts to clear floodwater from Lekki, Lagos' },  // Lagos marker
            { position: [9.0579, 7.4951], description: 'Earthquake tremors felt in Abuja, Nigeria' },  // Abuja marker
            { position: [-1.2921, 36.8219], description: 'Drought and water scarcity concerns in Nairobi, Kenya' },  // Nairobi, Kenya
            { position: [4.0511, 9.7679], description: 'Landslide near Douala, Cameroon causing roadblocks' },  // Douala, Cameroon
            { position: [3.3792, -76.532], description: 'Flash floods causing mudslides in Cali, Colombia' },  // Cali, Colombia
            { position: [40.7128, -74.006], description: 'Heavy snowfall causing power outages in New York, USA' },  // New York, USA
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
