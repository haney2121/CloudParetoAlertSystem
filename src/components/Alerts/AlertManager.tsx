import Alerts from './Alerts';
import { Alert } from '../../types/Alert';

const AlertManager = ({ alerts }: { alerts: Alert[] }) => {
  return (
    <div>
      <h3>Alert Manager</h3>
      {alerts.map((alert, idx) => (
        <Alerts key={idx} {...alert} />
      ))}
    </div>
  );
};

export default AlertManager;
