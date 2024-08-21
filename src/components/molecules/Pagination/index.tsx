import { PaginationDto } from '@/shared/dto';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './pagination_molecule.sass';

type PaginationProps = {
  pagination: PaginationDto;
};

export default function PaginationMolecule({ pagination }: PaginationProps) {
  return (
    <div className="pagination">
      <button disabled className="pageBtn">
        <FaChevronLeft />
      </button>
      <p className="pageContinuos">...</p>
      <button disabled className="pageValue">
        {pagination.currentPage - 2}
      </button>
      <button className="pageValue">{pagination.currentPage - 1}</button>
      <button className="pageValueCurrent">{pagination.currentPage}</button>
      <button className="pageValue">{pagination.currentPage + 1}</button>
      <button className="pageValue">{pagination.currentPage + 2}</button>
      <p className="pageContinuos">...</p>
      <button className="pageBtn">
        <FaChevronRight />
      </button>
    </div>
  );
}
