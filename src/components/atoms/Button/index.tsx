import React from 'react';

type ButtonProps = {
  icon: React.ReactNode;
  onclick: () => void;
};

export default function Button({ icon, onclick }: ButtonProps) {
  return (
    <button className="button" onClick={onclick}>
      {icon}
    </button>
  );
}
