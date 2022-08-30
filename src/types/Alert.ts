type AlertTypes = 'error' | 'warning' | 'info' | 'success';

export type Alert = {
  id: string;
  timeLimit: string;
  text: string;
  link: string;
  alertTitle: string;
  alertType: AlertTypes;
};
