import { render, screen } from '@testing-library/react';
import UpgradeBanner from '../UpgradeBanner';

// ✅ Mock StripeCheckoutButton to isolate the test
vi.mock('../StripeCheckoutButton', () => ({
  default: () => <button>Mock Stripe Button</button>,
}));

test('renders upgrade CTA and mock Stripe button', () => {
  render(<UpgradeBanner user={{ id: 'user_123' }} />);
  expect(screen.getByText(/upgrade/i)).toBeInTheDocument();
  expect(screen.getByText(/mock stripe button/i)).toBeInTheDocument();
});
