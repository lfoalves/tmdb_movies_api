import { Link } from "react-router-dom";

export function NotFound() {
  return(
    <div
      className="not-found"
      style={{
        display: 'grid',
        width: '100vw', 
        height: '80vh',

        padding: '4rem 0',
        margin: '0 auto',
        gap: '1rem',

        textAlign: 'center'
      }}>
      <h1 style={{alignSelf: 'self-end'}}>Not Found 404</h1>
      <Link 
        to={'/'} 
        title={'Ir para a página inicial'}
        style={{alignSelf: 'self-start'}}
        >
          Ir para o início
      </Link>
    </div>
  );
}