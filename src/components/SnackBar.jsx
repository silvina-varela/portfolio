import React, {forwardRef, useEffect, useState} from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBar = ({status, message}) => {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, [message])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
          {status === 'success' ? 'Thanks! I will get back to you soon.' : 'Sorry! Something went wrong. Please try again later.'}
        </Alert>
      </Snackbar>
  );
}

export default SnackBar;