import React from 'react'
import { Link } from 'react-router-dom'

const VentixeLogo = () => {
  return (
    <Link to='/' className='logotype' >
    <img src='/src/assets/ventixe_logo.svg' alt='Ventixe logotype' />
    <span>Ventixe</span>
    </Link>
  )
}

export default VentixeLogo