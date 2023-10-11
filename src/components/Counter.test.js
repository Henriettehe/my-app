import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

//Kodekilde: Google og chatGpt for tips og triks :) 

test('renders initial count of 0', () => {
  render(<Counter />);
  const countElement = screen.getByText('Count: 0');
  expect(countElement).toBeInTheDocument();
});

test('increments count when the button is clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('Increment');
  fireEvent.click(incrementButton);
  const updatedCountElement = screen.getByText('Count: 1');
  expect(updatedCountElement).toBeInTheDocument();
});
