import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

// types
import { Alert } from '../../types/Alert';

// utils
import { alertOptionTypes } from './utils';

interface IProps {
  createAlert: (alert: Alert) => void;
  alerts: Alert[];
}

const CreateAlertForm = ({ createAlert, alerts }: IProps) => {
  const [alert, setAlert] = useState<Alert>({
    timeLimit: '10',
    text: '',
    link: '',
    alertType: 'info',
    alertTitle: '',
    id: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlert({ ...alert, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // user created Id
      if (alert.id) {
        // checking if id already exist
        const existingId = alerts.find((a) => a.id === alert.id);
        if (existingId) {
          // if found throw error to let user know duplicate id is found
          throw Error('Alert with ID already exist.');
        }
      }
      createAlert(alert);
    } catch (err: any) {
      const e = err as unknown as Error;
      setError(e.message);
    }
  };

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}>
      <h3>Create Alert</h3>
      <div>
        <TextField
          id='standard-title-helper-text'
          label='Alert Id'
          name='id'
          onChange={handleChange}
          value={alert.id}
          error={error !== ''}
          helperText={error}
        />
      </div>
      <div>
        <TextField
          id='standard-title-helper-text'
          label='Alert Title'
          name='alertTitle'
          onChange={handleChange}
          value={alert.alertTitle}
        />
      </div>
      <div>
        <TextField
          id='standard-text-helper-text'
          label='Text'
          name='text'
          onChange={handleChange}
          value={alert.text}
        />
      </div>
      <div>
        <TextField
          id='standard-time-limit-text'
          label='Time Limit'
          name='timeLimit'
          helperText='Time in seconds'
          onChange={handleChange}
          value={alert.timeLimit}
        />
      </div>
      <div>
        <TextField
          id='standard-link-helper-text'
          label='Link'
          name='link'
          onChange={handleChange}
          value={alert.link}
        />
      </div>
      <div>
        <TextField
          id='standard-select-alert-type'
          select
          label='Alert Type'
          name='alertType'
          value={alert.alertType}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText='Please select alert type'>
          {alertOptionTypes.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <Button type='submit' variant='contained'>
        Submit
      </Button>
    </Box>
  );
};

export default CreateAlertForm;
