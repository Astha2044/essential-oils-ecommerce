export default function CartPage() {
  return (
    <div style={{ padding: '4rem', textAlign: 'center', fontFamily: 'serif' }}>
      <h1 style={{ fontSize: '3rem', color: '#2D4636' }}>Your Shopping Cart</h1>
      <p style={{ color: '#6B7280', marginTop: '1rem' }}>Review your selection of natural essences.</p>
      <div style={{ marginTop: '2rem', padding: '2rem', border: '1px solid #E5E7EB', borderRadius: '1rem', maxWidth: '600px', margin: '2rem auto' }}>
        <p>Your cart is currently empty.</p>
      </div>
    </div>
  );
}
