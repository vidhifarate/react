export default function Values() {
  const items = [
    { icon: "fas fa-handshake", title: "Integrity", desc: "Upholding honesty, trust, and strong ethical standards." },
    { icon: "fas fa-fire-alt", title: "Passion", desc: "Excitement and dedication in delivering solutions and projects." },
    { icon: "fas fa-lightbulb", title: "Innovation", desc: "Creative, efficient approaches to construction and development." },
    { icon: "fas fa-gavel", title: "Responsibility", desc: "Positive impact on the environment and our communities." },
    { icon: "fas fa-leaf", title: "Sustainability", desc: "Embracing green construction for a better tomorrow." },
    { icon: "fas fa-shield-alt", title: "Health & Safety", desc: "Prioritizing safe and healthy environments for all." },
    { icon: "fas fa-users", title: "Respect", desc: "Mutual respect, valuing people and diversity." },
    { icon: "fas fa-trophy", title: "Quality", desc: "Pride in delivering excellence, first time, on time." },
  ];

  return (
    <section id="values" className="section">
      <h3 className="section-heading">Our core values</h3>
      <hr />
      <br />
      <div className="values-row">
        {items.map((it, idx) => (
          <div key={idx} className="values-item">
            <div className="values-icon"><i className={it.icon}></i></div>
            <div className="values-content">
              <h4 className="values-title">{it.title}</h4>
              <div className="values-line"></div>
              <p>{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
