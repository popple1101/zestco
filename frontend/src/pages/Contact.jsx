export default function Contact() {
  return (
    <section className="section">
      <h1>Contact</h1>
      <div className="card">
        <form onSubmit={(e)=>e.preventDefault()}>
          <div style={{display:'grid', gap:12}}>
            <input placeholder="이름" />
            <input placeholder="이메일" type="email" />
            <textarea placeholder="문의 내용" rows={6} />
            <button type="submit">보내기</button>
          </div>
        </form>
      </div>
    </section>
  )
}
