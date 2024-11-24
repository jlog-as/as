import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Recipe Sharing App header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Recipe Sharing App/i);
  expect(headerElement).toBeInTheDocument();
});

test('filters recipes by ingredient', () => {
  render(<App />);
  
  const inputElement = screen.getByPlaceholderText(/Filter by ingredient/i);
  expect(inputElement).toBeInTheDocument();

  // Simulate typing in the filter input
  fireEvent.change(inputElement, { target: { value: 'chicken' } });
  
  // Check that only the "Chicken Curry" recipe is displayed
  const recipeTitle = screen.getByText(/Chicken Curry/i);
  expect(recipeTitle).toBeInTheDocument();
});
