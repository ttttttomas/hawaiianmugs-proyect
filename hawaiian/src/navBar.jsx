import './navBar.css'
import './index.css'

function App() {
  return (
    <>
    <nav className="nav">
        <div className="nav-search">
            <input autocomplete="off" placeholder='Buscar' type="search" id="search" />
            <i class='bx bx-search'></i>
        </div>
        <div className="nav-center">
            <h1 className="nav-title">Hawaiian Mugs</h1>
            <ul className="nav-center-list">
                <li className="item-list">INICIO</li>
                <li className="item-list focus">PRODUCTOS</li>
                <li className="item-list">CONTACTO</li>
            </ul>
        </div>
        <div className="nav-account">
            <div className="nav-account-login">
                <span className="login">CREAR CUENTA</span>
                <span>|</span>
                <span className="login">INICIAR SESION</span>
            </div>
            <div className="nav-account-cart">
                <i class='bx bx-cart'></i>
            </div>
        </div>
    </nav>
    </>
  )
}

export default App
