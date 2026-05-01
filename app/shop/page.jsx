export default function ShopPage() {
  return (
    <div style={{ padding: '4rem', textAlign: 'center', fontFamily: 'serif' }}>
      <h1 style={{ fontSize: '3rem', color: '#2D4636' }}>Our Collection</h1>
      <p style={{ color: '#6B7280', marginTop: '1rem' }}>Browse our full range of therapeutic grade essential oils.</p>
      <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
        {/* Product items would go here */}
        <p>Shop catalog placeholder...</p>
      </div>
    </div>
  );
}
