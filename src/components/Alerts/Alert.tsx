import { Alert as MuiAlert, AlertTitle } from '@mui/material';
import { useAlertReducer } from '../../context/AlertContext';
import { Alert as AlertType } from '../../types/Alert';

const Alert = ({
  timeLimit,
  alertTitle,
  text,
  alertType,
  link,
  id,
}: AlertType) => {
  const { removeAlert } = useAlertReducer();
  if (link) {
    return (
      <a href={link} id={id} target='_blank' rel='noreferrer'>
        <MuiAlert severity={alertType} onClose={() => removeAlert(id)}>
          <AlertTitle>{alertTitle}</AlertTitle>
          {text}
          <p>Expires: {timeLimit} seconds</p>
        </MuiAlert>
      </a>
    );
  }
  return (
    <MuiAlert id={id} severity={alertType} onClose={() => removeAlert(id)}>
      <AlertTitle>{alertTitle}</AlertTitle>
      {text}
      <p>Expires: {timeLimit} seconds</p>
    </MuiAlert>
  );
};

export default Alert;
