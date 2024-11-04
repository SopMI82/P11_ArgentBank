import NavItems from '../../components/NavItems/NavItems';
import NavLogo from '../../components/NavLogo/NavLogo';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="main-nav">
                <NavLogo />
                <NavItems
                    navTo={"/signin"}
                    navIcon={"fa fa-user-circle"}
                    navText={" Sign In"}
                />
            </nav>
        </div>
    );
};

export default Header;