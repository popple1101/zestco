export default function AdminNotices() {
  return (
    <section className="section">
      <h1>Manage Notices</h1>
      <div className="card">
        <p>공지 작성/수정 리스트 자리.</p>
        <table className="table">
          <thead><tr><th>제목</th><th>작성일</th><th>액션</th></tr></thead>
          <tbody>
            <tr><td>공지사항 샘플 1</td><td>2025-10-24</td><td><button>수정</button> <button>삭제</button></td></tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
