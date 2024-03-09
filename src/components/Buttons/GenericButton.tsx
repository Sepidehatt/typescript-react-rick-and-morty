import React from 'react';

type GenericButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

const GenericButton: React.FC<GenericButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default GenericButton;
