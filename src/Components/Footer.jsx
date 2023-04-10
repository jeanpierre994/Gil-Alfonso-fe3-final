import React, {useContext} from 'react'
import { ContextGlobal } from './utils/global.context'
import logoDH from "./public/images/DH.png"


const Footer = () => {

  const { currentContext } = useContext(ContextGlobal)
  const { theme } = currentContext

  return (
    <footer className={theme}>
        <p>Powered by</p>
        <img src={logoDH} alt='DH-logo' />
    </footer>
  )
}

export default Footer
