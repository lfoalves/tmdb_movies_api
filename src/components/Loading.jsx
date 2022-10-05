import '../styles/loading.css';
export function Loading() {
  return(
    <div className="container-load">
      <div className='loader'></div>
      <p className='reload'>Por favor tente novamente</p>
    </div>
  );
}