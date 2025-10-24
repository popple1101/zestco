import { useCMS } from "../lib/useCMS.jsx";

export default function Notice() {
  const notices = useCMS("cms_notices", []);
  const list = Array.isArray(notices) ? [...notices] : [];
  list.sort((a, b) => String(b.date).localeCompare(String(a.date)));

  return (
    <section className="section">
      <h1>Notice</h1>
      <table className="table mt-12">
        <thead>
          <tr>
            <th>제목</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {list.length === 0 && (
            <tr>
              <td colSpan={2} className="muted">
                공지 없음
              </td>
            </tr>
          )}
          {list.map((n) => (
            <tr key={n.id}>
              <td>{n.title}</td>
              <td>{n.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
