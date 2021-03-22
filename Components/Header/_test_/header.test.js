import { render, screen } from '@testing-library/react';
import App from '/Users/wotim/Documents/reactPractice/my-app/src/App.js';

test('renders my header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Submit Something/);
  expect(linkElement).toBeInTheDocument();
});