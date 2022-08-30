import Alert from './Alert';
import { useAlertReducer } from '../../context/AlertContext';

const AlertManager = () => {
  const { alerts } = useAlertReducer();

  return (
    <div>
      <h3>Alert Manager</h3>
      {alerts.map((alert) => (
        <Alert key={alert.id} {...alert} />
      ))}
      {alerts.length === 0 && <p>No Alerts</p>}
    </div>
  );
};

export default AlertManager;
