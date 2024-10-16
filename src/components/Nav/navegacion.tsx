import icon from '/src/assets/img/icon.png';  
import './nav.css'
import { useState, useEffect } from 'react';

const Navegacion= () => {
  const [activo, setActivo] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);

  const handleScroll = () => {
    setStickyHeader(window.scrollY > 0);
  }
  const toggleMenu = () => {
    setActivo(!activo);
  };
  const resetClasses = () => {
    setActivo(false);
  };
  useEffect(() => {
    // Agrega un listener para cuando la ventana cambie de tamaño (opcional, si es necesario)
    window.addEventListener('resize', resetClasses);
    window.addEventListener('scroll', handleScroll);
    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', resetClasses);
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);
  return (
    <nav className={stickyHeader ? 'sticky' : ''}>
      <a href="#" className="logo"><img src={icon} alt="icon" /></a>
      <ul className={`navMenu ${activo ? 'open' : ''}`}>
        <li><a href="/inicio">Inicio</a></li>
        <li><a href="/shop">Productos</a></li>
      </ul>
      <div className='nav-icons' >
        <a href="/lista"></a>
        <a href="/carrito"><i className='bx bxs-cart'></i></a>
        <a href="/login">Login</a>
        <a href="#">LogOut</a>
        <button id="menu-icon" onClick={toggleMenu} className={activo ? 'bx bx-x-circle' : 'bx bx-menu'}></button>
      </div>
    </nav>
  )
}
export default Navegacion