'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

import { useSelection } from '@/hooks/use-selection';

function noop(): void {
  // do nothing
}

export interface DisasterReport {
  id: string;
  reportTitle: string;
  icon: string; // Replacing avatar with a relevant icon or image related to the report
  disasterType: string;
  location: string; // Added location field
  status: string;
  submittedOn: Date;
}

interface DisasterReportsTableProps {
  count?: number;
  page?: number;
  rows?: DisasterReport[];
  rowsPerPage?: number;
}

export function DisasterReportsTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
}: DisasterReportsTableProps): React.JSX.Element {
  const rowIds = React.useMemo(() => {
    return rows.map((report) => report.id);
  }, [rows]);

  const { selectAll, deselectAll, selectOne, deselectOne, selected } = useSelection(rowIds);

  const selectedSome = (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < rows.length;
  const selectedAll = rows.length > 0 && selected?.size === rows.length;

  return (
    <Card>
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: '800px' }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedAll}
                  indeterminate={selectedSome}
                  onChange={(event) => {
                    if (event.target.checked) {
                      selectAll();
                    } else {
                      deselectAll();
                    }
                  }}
                />
              </TableCell>
              <TableCell>Report Title</TableCell>
              <TableCell>Disaster Type</TableCell>
              <TableCell>Location</TableCell> {/* New column for location */}
              <TableCell>Status</TableCell>
              <TableCell>Submitted On</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const isSelected = selected?.has(row.id);

              return (
                <TableRow hover key={row.id} selected={isSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected}
                      onChange={(event) => {
                        if (event.target.checked) {
                          selectOne(row.id);
                        } else {
                          deselectOne(row.id);
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
                      <Avatar>{row.icon}</Avatar> {/* Icon related to the disaster report */}
                      <Typography variant="subtitle2">{row.reportTitle}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{row.disasterType}</TableCell>
                  <TableCell>{row.location}</TableCell> {/* Display location */}
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{dayjs(row.submittedOn).format('MMM D, YYYY')}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <TablePagination
        component="div"
        count={count}
        onPageChange={noop}
        onRowsPerPageChange={noop}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}
