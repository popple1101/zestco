import { useCMS } from "../lib/useCMS.jsx";

export default function Products() {
  const products = useCMS("cms_products", []); // [{name, price, status}]
  const list = Array.isArray(products) ? products : [];

  return (
    <section className="section">
      <h1>Products</h1>
      <div className="grid mt-12">
        {list.length === 0 && (
          <div className="muted">등록된 제품이 없습니다.</div>
        )}
        {list.map((p) => (
          <div className="card" key={p.id}>
            <div
              style={{
                height: 140,
                background: "#f7f7f7",
                borderRadius: 8,
                marginBottom: 12,
              }}
            />
            <b>{p.name}</b>
            <p className="muted">{p.status === "draft" ? "비공개" : "공개"}</p>
            {typeof p.price === "number" && (
              <p>{p.price.toLocaleString()} 원</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
