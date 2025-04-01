import { render, screen } from '@testing-library/react';
import Cancel from '../Cancel';

test('shows cancel message', () => {
  render(<Cancel />);
  expect(screen.getByText(/cancel/i)).toBeInTheDocument();
});
