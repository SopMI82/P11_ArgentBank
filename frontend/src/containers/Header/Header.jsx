import { useSelector, useDispatch } from 'react-redux';
import NavItems from '../../components/NavItems/NavItems';
import NavLogo from '../../components/NavLogo/NavLogo';
import './Header.css';
import { getUserProfile, logout, selectIsAuthenticated, selectToken, selectUserName } from "../../redux/features/auth/authSlice";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {

    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const userName = useSelector(selectUserName);
    const navigate = useNavigate();

    /** Au montage du composant, on verifie si un token est présent dans le store, si oui, on appelle getUserProfile pour récupérer le userName dans le profil de l'utilisateur */
    useEffect(() => {
        if (token) {
            dispatch(getUserProfile());
        }        
    }, [dispatch, token]);
    

    /** Gérer la déconnection : renvoi à la page d'accueil et dispatcher le reducer logout pour supprimer le token du sessionStorage ainsi que les données du profil utilisateur */
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
                    <div className="auth-nav-items">
                        <NavItems
                            navTo="/user"
                            navIcon="fa fa-user-circle"
                            navText={userName || 'user'}
                        />
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