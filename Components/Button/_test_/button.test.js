import { render, screen } from '@testing-library/react';
import Button from './Button/button.js';

test('input', () => {
  render(<Button/>);
  const linkElement = screen.getByText(/submit/);
  expect(linkElement).toBeInTheDocument();
});

