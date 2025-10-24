export default function Products() {
  return (
    <section className="section">
      <h1>Products</h1>
      <div className="grid">
        {[1, 2, 3].map((n) => (
          <div className="card" key={n}>
            <div
              style={{
                height: 140,
                background: "#f7f7f7",
                borderRadius: 8,
                marginBottom: 12,
              }}
            />
            <b>제품 {n}</b>
            <p>짧은 설명 텍스트…</p>
          </div>
        ))}
      </div>
    </section>
  );
}
