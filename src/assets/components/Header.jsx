import React from 'react'
import Breadcrumb from './UI/Breadcrumb'
import SignedIn from './UI/SignedIn'

const Header = () => {
  return (
    <header>
      <Breadcrumb />
      <SignedIn />
    </header>
  )
}

export default Header