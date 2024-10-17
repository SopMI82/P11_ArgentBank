import NavItems from '../../components/NavItems/NavItems';
import NavLogo from '../../components/NavLogo/NavLogo';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="main-nav">
                <NavLogo />
                <NavItems />
            </nav>
        </div>
    );
};

export default Header;