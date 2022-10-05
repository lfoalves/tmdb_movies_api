import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import { BackToTopButton } from './components/BackToTopButton';
import { Navbar } from './components/Navbar';

export function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <BackToTopButton />
      <Outlet />
    </div>
  )
}