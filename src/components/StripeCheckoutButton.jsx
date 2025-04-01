import React from 'react';

const StripeCheckoutButton = ({ user }) => {
  const handleCheckout = async () => {
    if (!user?.id) {
      console.error('❌ Missing user ID');
      alert('User not authenticated.');
      return;
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/payment/create-checkout-session`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: user.id }),
        }
      );

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const { url } = await res.json();

      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No redirect URL returned from Stripe session');
      }
    } catch (err) {
      console.error('❌ Stripe checkout error:', err);
      alert('Payment failed. Try again or cry into your budget spreadsheet.');
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow text-center">
      <h3 className="text-lg font-semibold mb-2">Need more power?</h3>
      <button
        onClick={handleCheckout}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
      >
        Upgrade to Premium
      </button>
    </div>
  );
};

export default StripeCheckoutButton;
