import { Navbar, NavbarBrand } from 'reactstrap';
import BreweryJLogo from '../app/assets/img/logo.png';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <img src={BreweryJLogo} alt='breweryj logo' />
            </NavbarBrand>
        </Navbar>
    );
}

export default Header;