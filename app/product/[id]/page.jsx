export default function ProductDetailPage({ params }) {
  return (
    <div style={{ padding: '4rem', textAlign: 'center', fontFamily: 'serif' }}>
      <h1 style={{ fontSize: '3rem', color: '#2D4636' }}>Product Detail</h1>
      <p style={{ color: '#6B7280', marginTop: '1rem' }}>Learning more about the essence of nature.</p>
      <div style={{ marginTop: '2rem', maxWidth: '800px', margin: '2rem auto', display: 'flex', gap: '4rem', alignItems: 'center' }}>
        <div style={{ flex: 1, height: '400px', backgroundColor: '#F9FAFB', borderRadius: '1rem' }}></div>
        <div style={{ flex: 1, textAlign: 'left' }}>
          <h2 style={{ fontSize: '2rem' }}>Essential Oil Name</h2>
          <p style={{ marginTop: '1rem', color: '#4B5563' }}>Detailed description of the oil, its benefits, and usage instructions.</p>
          <button style={{ marginTop: '2rem', padding: '1rem 2rem', backgroundColor: '#2D4636', color: 'white', borderRadius: '2rem', border: 'none' }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
