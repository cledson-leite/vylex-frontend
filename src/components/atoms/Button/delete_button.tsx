import { FaTrash } from 'react-icons/fa';
import './button.sass';

type ButtonProps = {
  disabled?: boolean;
};

export default function DeleteButton({ disabled }: ButtonProps) {
  return (
    <button disabled={disabled} className="listItemBtn">
      <FaTrash />
    </button>
  );
}
