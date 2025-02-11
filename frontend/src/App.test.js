import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Shop link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Farm-Kart/i);
  expect(linkElement).toBeInTheDocument();
});
