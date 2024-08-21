import { FaPlusSquare } from 'react-icons/fa';
import './button.sass';

type ButtonProps = {
  disabled?: boolean;
};

export default function AddButton({ disabled }: ButtonProps) {
  return (
    <button disabled={disabled} className="addButton">
      <FaPlusSquare />
    </button>
  );
}
