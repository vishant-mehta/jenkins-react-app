import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('course name present', () => {
  render(<App />);
  expect(screen.getByText('Devops IA2')).toBeInTheDocument();
});
