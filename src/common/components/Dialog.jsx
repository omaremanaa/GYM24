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

function CustomizedDialogs({ isOpen, handleClose, data }) {
  return (
    <React.Fragment>
      <Dialog onClose={handleClose} open={isOpen}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Coach Details
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>Name: {data.name}</Typography>
          <Typography gutterBottom>
            Age: {new Date().getFullYear() - new Date(data.age).getFullYear()}
          </Typography>
          <Typography gutterBottom>Nationality: {data.nationality}</Typography>
          <Typography
            variant="h5"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            History
          </Typography>
          {data.history.map(coachHistory => (
            <ul>
              <li>
                <Typography gutterBottom>{coachHistory}</Typography>
              </li>
            </ul>
          ))}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
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
};

export default CustomizedDialogs;
