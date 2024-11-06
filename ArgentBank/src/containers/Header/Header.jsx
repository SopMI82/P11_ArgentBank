import { useSelector, useDispatch } from 'react-redux';
import NavItems from '../../components/NavItems/NavItems';
import NavLogo from '../../components/NavLogo/NavLogo';
import './Header.css';
import { logout, selectIsAuthenticated, selectUserName } from "../../redux/features/auth/authSlice";
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const dispatch = useDispatch();
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const userName = useSelector(selectUserName);
    const navigate = useNavigate();

    const handleSignOut = () => {
        dispatch(logout());
        navigate(`/`);
    };

    return (
        <div>
            <nav className="main-nav">
                <NavLogo />
                {!isAuthenticated ? (
                    <NavItems
                        navTo={"/signin"}
                        navIcon={"fa fa-user-circle"}
                        navText={" Sign In"}
                    />
                ) : (
                    // Affichage des éléments pour utilisateur connecté
                    <div className="auth-nav-items">
                        {/* Span pour afficher le nom d'utilisateur */}
                        <NavItems
                            navTo="#"
                            navIcon="fa fa-user-circle"
                            navText={userName || 'user'}
                            isSpan={true}
                        />
                        {/* Bouton de déconnexion */}
                        <NavItems
                            navTo="#"
                            navIcon="fa fa-sign-out"
                            navText="Sign Out"
                            onClick={handleSignOut}
                        />
                    </div>
                )}

            </nav>
        </div>
    );
};

export default Header;