import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import type { SxProps } from '@mui/material/styles';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import { DotsThreeVertical as DotsThreeVerticalIcon } from '@phosphor-icons/react/dist/ssr/DotsThreeVertical';
import dayjs from 'dayjs';

export interface EmergencyResource {
  id: string;
  icon: string; // Icon representing the type of resource (shelter, hospital, etc.)
  name: string;
  address: string;
  updatedAt: Date;
  type: 'Shelter' | 'Hospital' | 'Climate Data' | 'NASA Resource'; // Type of resource
  status: 'Operational' | 'Unavailable' | 'Partially Operational'; // Status of the resource
}

export interface LatestEmergencyResourcesProps {
  resources?: EmergencyResource[];
  sx?: SxProps;
}

export function LatestEmergencyResources({ resources = [], sx }: LatestEmergencyResourcesProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardHeader title="Latest Emergency Resources" />
      <Divider />
      <List>
        {resources.map((resource, index) => (
          <ListItem divider={index < resources.length - 1} key={resource.id}>
            <ListItemAvatar>
              {resource.icon ? (
                <Tooltip title={resource.type} placement="top">
                  <Box component="img" src={resource.icon} sx={{ borderRadius: 1, height: '48px', width: '48px' }} />
                </Tooltip>
              ) : (
                <Box
                  sx={{
                    borderRadius: 1,
                    backgroundColor: 'var(--mui-palette-neutral-200)',
                    height: '48px',
                    width: '48px',
                  }}
                />
              )}
            </ListItemAvatar>
            <ListItemText
              primary={resource.name}
              primaryTypographyProps={{ variant: 'subtitle1', fontWeight: 'bold' }}
              secondary={`Address: ${resource.address} • Last Updated: ${dayjs(resource.updatedAt).format('MMM D, YYYY')}`}
              secondaryTypographyProps={{ variant: 'body2' }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Chip
                label={resource.status}
                color={
                  resource.status === 'Operational'
                    ? 'success'
                    : resource.status === 'Partially Operational'
                    ? 'warning'
                    : 'error'
                }
                size="small"
              />
              <IconButton edge="end">
                <DotsThreeVerticalIcon weight="bold" />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
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
