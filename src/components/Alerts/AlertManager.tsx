import Alert from './Alert';
import { useAlertReducer } from '../../context/AlertContext';
import { Container, Grid } from '@mui/material';

const AlertManager = () => {
  const { alerts } = useAlertReducer();

  return (
    <Container>
      <h3>Alert Manager</h3>
      <Grid container spacing={2}>
        {alerts.map((alert) => (
          <Grid key={alert.id} item xs={12}>
            <Alert {...alert} />
          </Grid>
        ))}
      </Grid>

      {alerts.length === 0 && <p>No Alerts</p>}
    </Container>
  );
};

export default AlertManager;
