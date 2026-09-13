import React from "react";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";

export default function Technologies({ technologies, stack, onAdd, onRemove, onRemoveAll }) {
  return (
    <section id="technologies" className="technologies container">
      <div className="section-heading">
        <h2>Explore the <span>Technologies</span></h2>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="content-grid">
        <div className="tech-grid">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              tech={technology}
              selected={stack.some((item) => item.id === technology.id)}
              onAdd={onAdd}
            />
          ))}
        </div>

        <StackSidebar stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
      </div>
    </section>
  );
}
