import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experiencia" className="reveal">
      <div className="section-label">
        <span className="no">Fig. 03</span> Experiencia
      </div>
      <h2 className="h">Dónde he puesto esto en práctica</h2>
      <div className="xp">
        {experience.map((item) => (
          <div className="xp-item" key={item.role}>
            <div className="xp-date mono">{item.date}</div>
            <div>
              <div className="xp-role">
                {item.role}{' '}
                <span
                  className={`badge${
                    item.badgeType === 'pub' ? ' pub' : ''
                  }`}
                >
                  {item.badge}
                </span>
              </div>
              <div className="xp-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
