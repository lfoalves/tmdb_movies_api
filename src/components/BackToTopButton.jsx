import { FaArrowUp } from 'react-icons/fa'
import '../styles/back-to-top-button.css';
export function BackToTopButton() {
  return(
    <a href='#' className="backTopTop" title='Ir para o topo'>
      <FaArrowUp />
    </a>
  );
}