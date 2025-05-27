import VentixeLogo from './VentixeLogo'
import Breadcrumb from './UI/Breadcrumb';
import { useNavbarStatus } from '/src/assets/contexts/NavbarStatusProvider'
import NavigationLinkList from './NavigationLinkList';
import SignedIn from './UI/SignedIn';

const Nav = () => {

  const { expandMenu, toggleMenu } = useNavbarStatus();


  return (
    <aside className='navbar'>
      <VentixeLogo />
        <Breadcrumb />
      <nav>
        <button onClick={toggleMenu} className="btn-burger">
          <i className="fa-regular fa-bars"></i>
        </button>
        <NavigationLinkList addClass={`${expandMenu ? 'show' : ''}`}/>
      </nav>
    </aside>
  )
}

export default Nav