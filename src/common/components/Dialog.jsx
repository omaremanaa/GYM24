import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

function CustomizedDialogs({ isOpen, handleClose, data, locale }) {
  return (
    <>
      <Dialog dir={locale ? 'ltr' : 'rtl'} onClose={handleClose} open={isOpen}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <FormattedMessage id="CoachDetails" />
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: locale ? 8 : null,
            left: locale ? null : 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            {' '}
            <FormattedMessage id="Name" />: {data.name}
          </Typography>
          <Typography gutterBottom>
            <FormattedMessage id="Age" />:{' '}
            {new Intl.NumberFormat(locale ? 'en' : 'ar-SA').format(
              new Date().getFullYear() - new Date(data.age).getFullYear(),
            )}
          </Typography>
          <Typography gutterBottom>
            <FormattedMessage id="Nationality" />:{' '}
            <FormattedMessage id={data.nationality} />
          </Typography>
          <Typography
            variant="h5"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <FormattedMessage id="History" />
          </Typography>
          {data.history.map(coachHistory => (
            <ul>
              <li>
                <Typography gutterBottom>
                  {<FormattedMessage id={coachHistory} />}
                </Typography>
              </li>
            </ul>
          ))}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            <FormattedMessage id="Close" />
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
CustomizedDialogs.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    history: PropTypes.arrayOf(PropTypes.shape()),
    nationality: PropTypes.string,
    age: PropTypes.string,
  }).isRequired,
  locale: PropTypes.bool.isRequired,
};

export default CustomizedDialogs;
