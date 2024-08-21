import { FaEdit } from 'react-icons/fa';
import './button.sass';

type ButtonProps = {
  disabled?: boolean;
};

export default function EditButton({ disabled }: ButtonProps) {
  return (
    <button disabled={disabled} className="listItemBtn">
      <FaEdit />
    </button>
  );
}
