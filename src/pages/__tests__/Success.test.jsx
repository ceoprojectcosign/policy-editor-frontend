import { render, screen } from '@testing-library/react';
import Success from '../Success';

test('shows success message', () => {
  render(<Success />);
  expect(screen.getByText(/success/i)).toBeInTheDocument();
});
