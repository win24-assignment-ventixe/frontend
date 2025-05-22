import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

function NavbarStatusProvider({ children }) {
  const [expandMenu, setExpandMenu] = useState(false);

  const toggleMenu = () => {
    setExpandMenu(!expandMenu);
  };

  return (
    <NavbarContext.Provider value={{ expandMenu, toggleMenu }}>
      {children}
    </NavbarContext.Provider>
  );
}

export default NavbarStatusProvider;

export function useNavbarStatus() {
  return useContext(NavbarContext);
}