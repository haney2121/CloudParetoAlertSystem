import { Container, Grid } from '@mui/material';
import AlertManager from './components/Alerts/AlertManager';

import { useAlertReducer } from './hooks/useAlertReducer';
import CreateAlertForm from './components/CreateAlertForm/CreateAlertForm';

function App() {
  const { createAlert, alerts } = useAlertReducer();

  return (
    <Container>
      <h2>CloudPareto’s Alert System</h2>

      <Grid container spacing={3}>
        <Grid item xs={8}>
          <CreateAlertForm createAlert={createAlert} alerts={alerts} />
        </Grid>
        <Grid item xs={2}>
          <AlertManager alerts={alerts} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
