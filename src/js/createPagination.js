import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const options = {
  totalItems: 70,
  itemsPerPage: 10,
  visiblePages: 4,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
}
const pagination = new Pagination('pagination', options);