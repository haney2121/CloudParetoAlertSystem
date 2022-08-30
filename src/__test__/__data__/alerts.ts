import { Alert } from '../../types/Alert';

export const alert: Alert = {
  timeLimit: '10',
  alertTitle: 'Alert Message',
  text: 'This is an alert component test',
  alertType: 'info',
  link: '',
  id: '1',
};

export const alerts: Alert[] = [
  {
    timeLimit: '10',
    alertTitle: 'Alert Message',
    text: 'This is an alert component test',
    alertType: 'info',
    link: '',
    id: '1',
  },
  {
    timeLimit: '10',
    alertTitle: 'Alert Message Two',
    text: 'This is an alert component test',
    alertType: 'success',
    link: '',
    id: '2',
  },
];
