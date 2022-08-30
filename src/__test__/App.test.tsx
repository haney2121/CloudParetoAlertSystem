import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders app component and finds h1 text', () => {
  render(<App />);
  const linkElement = screen.getByText(/CloudPareto’s Alert System/i);
  expect(linkElement).toBeInTheDocument();
});
