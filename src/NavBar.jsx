import './navBar.css'
import './index.css'
import { useState, useEffect } from 'react'
export default function NavBar() {
        const [activeIndex, setActiveIndex] = useState(0);
      

        const items = ['INICIO', 'PRODUCTOS', 'CONTACTO'];
      
        const handleClick = (index) => {
          // Actualiza el estado con el índice del elemento clicado
          setActiveIndex(index);
        }
        return (
          <>
          <nav className="nav">
              <div className="nav-search">
                  <input 
                    autoComplete="off"
                    placeholder='Buscar'
                    type="search"
                    id="search" 
                  />
                  <i className='bx bx-search'></i>
              </div>
              <div className="nav-center">
                  <h1 className="nav-title">Hawaiian Mugs</h1>
                  <ul className='nav-center-list'>
                    {items.map((item, index) => (
                    <li
                    key={index}
                    className={index === activeIndex ? 'item-list active' : 'item-list'}
                    onClick={() => handleClick(index)}
                    >
                    {item}
                    </li>
                    ))
                    }
                  </ul>
              </div>
              <div className="nav-account">
                  <div className="nav-account-login">
                      <span className="login">CREAR CUENTA</span>
                      <span>|</span>
                      <span className="login">INICIAR SESION</span>
                  </div>
                  <div className="nav-account-cart">
                      <i className='bx bx-cart'></i>
                      <small>0</small>
                  </div>
              </div>
          </nav>
          </>
        )
      }

