import React from "react";
import { X } from "lucide-react";

export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="stack-panel">
      <div className="stack-heading">
        <h2>Your Stack</h2>

        <p>
          {stack.length === 0
            ? "No technologies selected."
            : `${stack.length} Technology${
                stack.length !== 1 ? "ies" : "y"
              } Selected`}
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          Your stack is empty.
        </div>
      ) : (
        <div className="stack-items">
          {stack.map((technology) => (
            <div className="stack-item" key={technology.id}>
              <img src={technology.icon} alt="" />

              <div>
                <strong>{technology.name}</strong>
                <small>{technology.category}</small>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
              >
                <X size={18} />
              </button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          className="remove-all"
          onClick={onRemoveAll}
        >
          Remove All
        </button>
      )}
    </aside>
  );
}