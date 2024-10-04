import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import type { SxProps } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import dayjs from 'dayjs';

// Status map for disaster severity
const severityMap = {
  mild: { label: 'Mild', color: 'warning' },
  moderate: { label: 'Moderate', color: 'info' },
  severe: { label: 'Severe', color: 'error' },
  critical: { label: 'Critical', color: 'error' },
} as const;

// Disaster report interface
export interface DisasterReport {
  id: string;
  location: string;
  description: string;
  severity: 'mild' | 'moderate' | 'severe' | 'critical';
  reportedAt: Date;
}

export interface LatestDisasterReportsProps {
  reports?: DisasterReport[];
  sx?: SxProps;
}

// Component to display latest disaster reports
export function LatestDisasterReports({ reports = [], sx }: LatestDisasterReportsProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardHeader title="Latest Disaster Reports" />
      <Divider />
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell>Report ID</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Description</TableCell>
              <TableCell sortDirection="desc">Reported Date</TableCell>
              <TableCell>Severity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map((report) => {
              const { label, color } = severityMap[report.severity] ?? { label: 'Unknown', color: 'default' };

              return (
                <TableRow hover key={report.id}>
                  <TableCell>{report.id}</TableCell>
                  <TableCell>{report.location}</TableCell>
                  <TableCell>{report.description}</TableCell>
                  <TableCell>{dayjs(report.reportedAt).format('MMM D, YYYY')}</TableCell>
                  <TableCell>
                    <Chip color={color} label={label} size="small" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={<ArrowRightIcon fontSize="var(--icon-fontSize-md)" />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
}
