import { accordionData } from "./data";
import "./accordion.css";
import { useState } from "react";
const Accordion = () => {
  const [data, setData] = useState(accordionData);

  const handleClick = (id) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isOpen: !item.isOpen,
        };
      } else {
        return {
          ...item,
          isOpen: false,
        };
      }
    });
    setData(updatedData);
  };

  return (
    <div className="accordion-container">
      {data.map((item) => {
        return (
          <div key={item.id} className="accordion">
            <div className="accordion-header">
              <h3>{item.title}</h3>
              <button onClick={() => handleClick(item.id)}>
                {item.isOpen ? "-" : "+"}
              </button>
            </div>
            {item.isOpen && (
              <div className="accordion-content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
