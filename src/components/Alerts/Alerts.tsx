import { Alert, AlertTitle, Link } from '@mui/material';
import { Alert as AlertType } from '../../types/Alert';

const Alerts = ({
  timeLimit,
  alertTitle,
  text,
  alertType,
  link,
  id,
}: AlertType) => {
  return (
    <Alert severity={alertType}>
      <AlertTitle>{alertTitle}</AlertTitle>
      {id}
      {text}
      {link && <Link>{link}</Link>}
    </Alert>
  );
};

export default Alerts;
