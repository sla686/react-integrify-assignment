import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from './Button';

import { useState } from 'react';

const Modal = ({
  onAdd,
  onClose,
  title = '',
  deadline = '',
  initStat = '',
  id = '',
  buttonText,
  modify = false,
}) => {
  // To keep state of the modal fields
  const [text, setText] = useState(title);
  const [date, setDate] = useState(deadline);
  const [status, setStatus] = useState(initStat);

  // To check if modal is filled up correctly
  const [textError, setTextError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    // Checking if title is not empty
    if (!text.trim()) {
      setTextError(true);
      return;
    }
    setTextError(false);

    // Checking if deadline is not empty
    if (!date.trim()) {
      setDateError(true);
      return;
    }
    setDateError(false);

    // If we modify then we need to send an ID, otherwise I create id in the function
    !modify ? onAdd({ text, date, status }) : onAdd({ id, text, date, status });

    setText('');
    setDate('');
    setStatus('');
  };

  return (
    <form className="add-form modal" onSubmit={onSubmit}>
      <Box className="form-control" sx={{ minWidth: 100, fontSize: 20 }}>
        <TextField
          required
          error={textError}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          margin="normal"
          fullWidth
          value={text}
          InputProps={{ style: { fontSize: 20 } }}
          InputLabelProps={{ style: { fontSize: 20 } }}
          onChange={(e) => setText(e.target.value)}
        />

        <TextField
          required
          error={dateError}
          id="outlined-basic"
          label="Deadline"
          variant="outlined"
          margin="normal"
          fullWidth
          value={date}
          InputProps={{ style: { fontSize: 20 } }}
          InputLabelProps={{ style: { fontSize: 20 } }}
          onChange={(e) => setDate(e.target.value)}
        />

        <FormControl required fullWidth margin="normal">
          <InputLabel sx={{ fontSize: 20 }} id="label-status">
            Status
          </InputLabel>
          <Select
            labelId="label-status"
            id="status-select"
            value={status}
            label="status"
            sx={{ fontSize: 20 }}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value={'green'}>Done</MenuItem>
            <MenuItem value={'yellow'}>In Progress</MenuItem>
            <MenuItem value={'red'}>Not Started</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <div className="btn-bottom">
        <Button color="grey" text="Cancel" onClick={onClose} />
        <input type="submit" value={buttonText} className="btn btn-block" />
      </div>
    </form>
  );
};

Modal.propTypes = {
  onAdd: PropTypes.func,
  onClose: PropTypes.func,
  title: PropTypes.string,
  deadline: PropTypes.string,
  initStat: PropTypes.string,
  id: PropTypes.number,
  buttonText: PropTypes.string,
  modify: PropTypes.bool,
};

export default Modal;
