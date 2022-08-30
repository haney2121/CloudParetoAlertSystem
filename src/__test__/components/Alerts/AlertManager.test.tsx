import { render, screen } from '@testing-library/react';
import AlertManager from '../../../components/Alerts/AlertManager';

test('renders app component and finds h1 text', () => {
  render(<AlertManager />);
  const title = screen.getByText(/Alert Manager/i);
  expect(title).toBeInTheDocument();
});
