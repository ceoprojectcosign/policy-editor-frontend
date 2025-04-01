export default function PremiumOnly({ user, children }) {
  const isPremium = user?.app_metadata?.subscription === 'premium'; // Adjust based on how you're storing it

  if (!isPremium) {
    return <div className="text-yellow-500">🔒 Premium feature. Upgrade to unlock.</div>;
  }

  return <>{children}</>;
}
