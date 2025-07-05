import { useState } from "react";
import "./tooltip.css";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}

      {showTooltip && <span className="tooltip">{text}</span>}
    </div>
  );
};

export default Tooltip;
