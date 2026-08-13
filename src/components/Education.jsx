import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section id="educacion" className="reveal">
      <div className="section-label">
        <span className="no">Fig. 05</span> Formación
      </div>
      <h2 className="h">Educación</h2>
      <div className="edu-list">
        {education.map((item) => (
          <div className="edu-item" key={item.name}>
            <div className="edu-tag mono">{item.tag}</div>
            <div className="edu-name">{item.name}</div>
            <div className="edu-note">{item.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
