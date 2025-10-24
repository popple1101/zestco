import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section">
      <h1>404</h1>
      <p>페이지를 찾을 수 없습니다.</p>
      <Link to="/about">홈으로</Link>
    </section>
  );
}
