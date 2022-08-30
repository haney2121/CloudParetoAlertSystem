import { render, screen } from '@testing-library/react';
import Alert from '../../../components/Alerts/Alert';

import { alert } from '../../__data__/alerts';

test('renders app component and finds h1 text', () => {
  render(<Alert {...alert} />);
  const title = screen.getByText(/Alert Message/i);
  const text = screen.getByText(/This is an alert component test/i);
  expect(title).toBeInTheDocument();
  expect(text).toBeInTheDocument();
});
