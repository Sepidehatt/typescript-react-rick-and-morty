import React from 'react';

type GenericButtonProps = {
  label: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

const GenericButton: React.FC<GenericButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button className="btn btn-sm border-0" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default GenericButton;
