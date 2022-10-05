import { Link, useNavigate } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi';
import { useState } from "react";
 
export function Navbar() {

  const [search, setSearch] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()

    if (search.length <= 0) {
      return alert('Por favor preencha o campo de pesquisa')
    }
    
    navigate(`/search?q=${search}`)
    setSearch([])
  }

  return(
    <nav
      id="navbar"
      style={{backgroundColor: '#121212',}}
    >
      <div className="nav-container"
        style={{
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', padding: '1rem 0.5rem', 
          maxWidth: '1200px',
          margin: '0 auto',
          gap: '0.5rem'
        }}
      >
        <Link to={'/'} title={'Ir para o início'}>
          <h2>
            <BiCameraMovie />
            Movie List
          </h2>
        </Link>
        <form
          onSubmit={handleSubmit}
          style={{display: 'flex', gap: '0.5rem', }}
        >
          <input 
            type="text" 
            name="" id="" 
            placeholder="Busque um filme"
            style={{
              padding: '.2rem .8rem',
              borderRadius: '4px', 
              border: 'none'
            }}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button 
            type="submit"
            title="Buscar filmes"
          >
            <BiSearchAlt2 />
          </button>
        </form>
      </div>
    </nav>
  );
}