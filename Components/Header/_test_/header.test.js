import { render, screen } from '@testing-library/react';
import Header from './Header/header.js'

test('renders my header', () => {
  render(<Header/>);
  const linkElement = screen.getByText(/Submit Something/);
  expect(linkElement).toBeInTheDocument();
});

