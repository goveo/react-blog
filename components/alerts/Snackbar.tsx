import React from 'react';
import MuiAlert, { AlertProps, Color as AlertType } from '@material-ui/lab/Alert';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

interface Props {
  type: AlertType;
  vertical?: SnackbarOrigin['vertical'];
  horizontal?: SnackbarOrigin['horizontal'];
}

const SnackbarAlert: React.FC<Props> = ({ type, vertical = 'bottom', horizontal = 'left', children }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => setOpen(false);

  return (
    <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} onClose={handleClose} key={vertical + horizontal}>
      <Alert severity={type}>{children}</Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
