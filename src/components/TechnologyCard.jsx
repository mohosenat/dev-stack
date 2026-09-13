import React from "react";
import { Star } from "lucide-react";

export default function TechnologyCard({ tech, selected, onAdd }) {
  return (
    <article className={selected ? "tech-card added" : "tech-card"}>
      <div className="card-top">
        <img src={tech.icon} alt={tech.name} onError={(event) => { event.currentTarget.style.display = "none"; }} />
        <span className="badge">{tech.badge}</span>
      </div>

      <h3>{tech.name}</h3>
      <p>{tech.description}</p>

      <div className="meta">
        <span>{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="rating"><Star size={12} fill="#fbbf24" strokeWidth={0} />{tech.rating}</span>
      </div>

      <button className={selected ? "add-btn added" : "add-btn"} disabled={selected} onClick={() => onAdd(tech)}>
        {selected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}
