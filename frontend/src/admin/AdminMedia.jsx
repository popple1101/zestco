import React from "react";
import useLocalState from "./hooks/useLocalState.jsx";

export default function AdminMedia() {
  const [media, setMedia] = useLocalState("cms_media", []);
  function onFiles(e) {
    const files = Array.from(e.target.files || []);
    files.forEach((f) => {
      const fr = new FileReader();
      fr.onload = () =>
        setMedia((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            dataUrl: fr.result,
            name: f.name,
            size: f.size,
          },
        ]);
      fr.readAsDataURL(f);
    });
  }
  function remove(id) {
    setMedia(media.filter((m) => m.id !== id));
  }

  return (
    <section className="section">
      <h1>Media</h1>
      <div className="card">
        <input type="file" accept="image/*" multiple onChange={onFiles} />
        <div className="grid mt-12">
          {media.map((m) => (
            <div className="card" key={m.id}>
              <img src={m.dataUrl} alt={m.name} className="img-cover-160" />
              <div className="flex justify-between items-center mt-8">
                <div>
                  <div>
                    <b>{m.name}</b>
                  </div>
                  <div className="muted">{(m.size / 1024).toFixed(1)} KB</div>
                </div>
                <button onClick={() => remove(m.id)}>삭제</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
