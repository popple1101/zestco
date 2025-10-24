export default function AdminProducts() {
  return (
    <section className="section">
      <h1>Manage Products</h1>
      <div className="card">
        <p>여기서 제품 추가/수정/삭제 폼 붙이면 됨(추후 Supabase 등 연동).</p>
        <table className="table">
          <thead><tr><th>이름</th><th>상태</th><th>액션</th></tr></thead>
          <tbody>
            <tr><td>제품 1</td><td>공개</td><td><button>수정</button> <button>삭제</button></td></tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
