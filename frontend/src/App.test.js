import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders To-Do List heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/to-do list/i); // Update to match actual heading
  expect(headingElement).toBeInTheDocument();
});
