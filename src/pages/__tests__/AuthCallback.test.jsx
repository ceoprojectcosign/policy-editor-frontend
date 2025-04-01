import { render, screen } from '@testing-library/react';
import AuthCallback from '../AuthCallback';

test('renders auth callback page', () => {
  render(<AuthCallback />);
  expect(screen.getByText(/auth/i)).toBeInTheDocument();
});
