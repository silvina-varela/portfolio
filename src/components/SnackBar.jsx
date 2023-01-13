import React, {forwardRef, useEffect, useState} from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation('common');

  return (
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
          {status === 'success' ? t("contact.successMessage")  : t("contact.errorMessage")}
        </Alert>
      </Snackbar>
  );
}

export default SnackBar;