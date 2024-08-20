/* eslint-disable prettier/prettier */
import React from 'react';

type InputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export default function Input({ type, placeholder, value, onChange }: InputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };
    return <input
  className="input"
  type={type}
  placeholder={placeholder}
  value={value}
  onChange={handleChange}
/>;
}
