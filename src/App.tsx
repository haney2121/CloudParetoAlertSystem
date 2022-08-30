import { Container, Grid } from '@mui/material';
import AlertManager from './components/Alerts/AlertManager';

import CreateAlertForm from './components/CreateAlertForm/CreateAlertForm';

function App() {
  return (
    <Container>
      <h2>CloudPareto’s Alert System</h2>

      <Grid container spacing={3}>
        <Grid item xs={8}>
          <CreateAlertForm />
        </Grid>
        <Grid item xs={4}>
          <AlertManager />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
