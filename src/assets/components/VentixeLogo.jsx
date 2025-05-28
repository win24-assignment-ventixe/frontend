import React from 'react'
import { Link } from 'react-router-dom'
import VentixeLogotype from './ventixelogo.svg'

const VentixeLogo = () => {
  return (
    <Link to='/' className='logotype' >
    <img src={VentixeLogotype} alt='Ventixe logotype' />
    <span>Ventixe</span>
    </Link>
  )
}

export default VentixeLogo