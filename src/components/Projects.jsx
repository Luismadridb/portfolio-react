import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="proyectos" className="reveal">
      <div className="section-label">
        <span className="no">Fig. 04</span> Proyectos
      </div>
      <h2 className="h">Repositorios</h2>
      <div className="grid-projects">
        {projects.map((p) => (
          <div className="card reveal" key={p.name}>
            <div className="card-top">
              <div className="card-name">{p.name}</div>
              <div
                className={`card-badge${
                  p.badge === 'Privado' ? ' private' : ''
                }`}
              >
                {p.badge}
              </div>
            </div>
            <div className="card-desc">{p.desc}</div>
            <div className="card-bottom">
              <div className="card-tags">
                {p.tags.map((tag) => (
                  <span className="card-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {p.link ? (
                <a
                  className="card-link"
                  href={p.link}
                  target="_blank"
                  rel="noopener"
                >
                  Ver repo →
                </a>
              ) : (
                <span className="card-link disabled">Código privado</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
