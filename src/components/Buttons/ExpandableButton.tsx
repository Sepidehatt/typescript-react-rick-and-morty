import React from 'react';
import { UseOpenController } from '../../interfaces/useOpenController.interface';


export const ExpendableButton: React.FC<UseOpenController> = ({ isOpen, toggle }) => {
  return (
    <button onClick={toggle}>
      <span
        className="material-symbols-outlined"
        style={{
          transform: `rotate(${isOpen ? 180 : 0}deg)`,
          transition: "all 0.25s",
        }}
      >
        expand_more
      </span>
    </button>
  );
};
