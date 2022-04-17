import * as React from 'react';
import { Box } from '~/box';
import { Backdrop } from '~/backdrop';
import { SpeedDial } from '~/speed-dial';
import { SpeedDialIcon } from '@mui/material';
import { SpeedDialAction } from '@mui/material';
import { FileCopyOutlined as FileCopyIcon } from '@mui/icons-material';
import { Save as SaveIcon } from '@mui/icons-material';
import { Print as PrintIcon } from '@mui/icons-material';
import { Share as ShareIcon } from '@mui/icons-material';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

function SpeedDialTooltipOpen_() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

export const SpeedDialTooltipOpen = () => <SpeedDialTooltipOpen_ />;
