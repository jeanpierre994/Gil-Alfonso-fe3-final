
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'
import { useContext } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  const { currentContext, dispatchContextUpdate } = useContext(ContextGlobal)

  const { theme } = currentContext

  const changeTheme = () => {
    dispatchContextUpdate({ type: "TOGGLE_THEME" })
  }

  return (
    <nav className={theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/">Home </Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/contact">contacts</Link>
      <button
      onClick={changeTheme}
      class="css-button-shadow-border-sliding--grey"
      >
        Change theme
        </button>
    </nav>
  )
}

export default Navbar