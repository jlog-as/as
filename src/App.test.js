import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Recipe Sharing App header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Recipe Sharing App/i);
  expect(headerElement).toBeInTheDocument();
});
