export default function About() {
  return (
    <section id="sobre-mi" style={{ borderTop: 'none' }} className="reveal">
      <div className="section-label">
        <span className="no">Fig. 01</span> Sobre mí
      </div>
      <div className="about-grid">
        <div className="about">
          <p>
            Soy desarrollador Fullstack, actualmente enfocado en frontend con
            Python/Streamlit y ampliando hacia Java. Trabajo en{' '}
            <strong>Kim_neyun</strong>, una plataforma de apoyo a la decisión
            clínica que predice demanda de pacientes respiratorios en
            hospitales de la Araucanía, mi primer proyecto profesional en el
            sector salud, con datos reales, un equipo backend y ciclos de
            revisión de código.
          </p>
          <p>
            Antes de dedicarme a esto fui Técnico en Diseño y Producción
            Industrial y tuve un proyecto propio de prótesis en impresión 3D.
            De ahí me quedó el hábito de iterar rápido y cuidar el detalle,
            algo que hoy aplico directamente a escribir y revisar código.
          </p>
          <p>
            Aprendo haciendo: cada bootcamp y proyecto personal que ves abajo
            lo llevé hasta un resultado funcional y probado, no solo hasta el
            tutorial.
          </p>
        </div>
        <div className="panel sidecard">
          <span className="cm-bl"></span>
          <span className="cm-br"></span>
          <div className="st">Cómo trabajo</div>
          <ul>
            <li>
              <b>Testing en serio</b> — MediTurnos llegó a 100% de cobertura
              con JUnit 5 y Mockito.
            </li>
            <li>
              <b>Documentación propia</b> — mantengo notas de continuidad
              para retomar proyectos largos sin perder contexto.
            </li>
            <li>
              <b>Cierro el ciclo</b> — de un PR con observaciones a merge a
              main, resolviendo cada comentario.
            </li>
            <li>
              <b>Autodidacta</b> — entré a Kim_neyun sin experiencia previa
              en Python y hoy sostengo módulos productivos del frontend.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
