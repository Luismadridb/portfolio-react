import { profile } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="hero" style={{ borderTop: 'none' }}>
      <div className="eyebrow">Ficha técnica — {profile.name}</div>
      <h1 className="title">
        Construyo software con la precisión de quien antes construía piezas.
      </h1>
      <p className="lede">
        Desarrollador Fullstack en Temuco, Chile. Actualmente en Kim_neyun,
        una plataforma de apoyo clínico para el sector salud, y ampliando mi
        stack con Java.
      </p>

      <div className="hero-grid">
        <div className="btnrow">
          <a className="btn" href={`mailto:${profile.email}`}>
            Escribirme
          </a>
          <a
            className="btn ghost"
            href={profile.github}
            target="_blank"
            rel="noopener"
          >
            Ver GitHub
          </a>
          <a
            className="btn ghost"
            href={profile.linkedin}
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
        </div>
        <div className="panel titleblock">
          <span className="cm-bl"></span>
          <span className="cm-br"></span>
          <div className="row">
            <span className="k">Nombre</span>
            <span className="v">{profile.name}</span>
          </div>
          <div className="row">
            <span className="k">Rol</span>
            <span className="v">{profile.role}</span>
          </div>
          <div className="row">
            <span className="k">Ubicación</span>
            <span className="v">{profile.location}</span>
          </div>
          <div className="row">
            <span className="k">Escala</span>
            <span className="v">1:1</span>
          </div>
          <div className="row">
            <span className="k">Contacto</span>
            <span className="v">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
