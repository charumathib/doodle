import { render, screen } from '@testing-library/react';
import App from './App';

// Default generated test case for the web application; not necessary/used
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
