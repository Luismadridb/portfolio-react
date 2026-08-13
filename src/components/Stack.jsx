import { stackGroups } from '../data/portfolio';

export default function Stack() {
  return (
    <section id="stack" className="reveal">
      <div className="section-label">
        <span className="no">Fig. 02</span> Stack técnico
      </div>
      <h2 className="h">Materiales y herramientas</h2>
      <div className="stack-groups">
        {stackGroups.map((group) => (
          <div className="stack-group" key={group.title}>
            <div className="gt">{group.title}</div>
            <div className="chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
