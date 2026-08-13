import { profile } from '../data/portfolio';

export default function Contact() {
  return (
    <section id="contacto" className="reveal">
      <div className="panel contact-panel">
        <span className="cm-bl"></span>
        <span className="cm-br"></span>
        <h2>¿Conversamos?</h2>
        <p>
          Estoy buscando mi próxima oportunidad como desarrollador fullstack.
          Si mi camino te hace sentido, hablemos.
        </p>
        <div className="contact-links">
          <a className="btn" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a
            className="btn ghost"
            href={profile.linkedin}
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
          <a
            className="btn ghost"
            href={profile.github}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
