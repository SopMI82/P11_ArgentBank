import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../../components/Button/Button";
import Field from "../../components/Field/Field";
import './FormSignIn.css'
import { loginUser, getUserProfile } from '../../redux/features/auth/authSlice';

const FormSignIn = () => {
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth) || {};
    const { isLoading = false, error = null } = authState;
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

     /** Ecouter les changements dans les champs */
    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'email') {
            setEmail(value);
        } else if (id === 'password') {
            setPassword(value);
        }
    };

    /** Ecouter le changement sur la checkbox */
    const handleCheckboxChange = (e) => {
        setRememberMe(e.target.checked);
    };

    /** Actions à effectuer au clic sur le bouton de soumission */
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await dispatch(loginUser({ email, password })).unwrap();

            if (result.status === 200) {
                const profileResult = await dispatch(getUserProfile()).unwrap();

                if (profileResult.status === 200) {
                    if (rememberMe) {
                        sessionStorage.setItem('token', result.body.token);
                    } else {
                        sessionStorage.removeItem('token');
                    }
                    navigate(`/user`);
                }
            }
        } catch (err) {
            console.error('Login error:', err);
        }
    };

    return (
        <>
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <Field
                        id="email"
                        type="text"
                        labelText="Username"
                        value={email}
                        onChange={handleChange}
                    />
                    <Field
                        id="password"
                        type="password"
                        labelText="Password"
                        value={password}
                        onChange={handleChange}
                    />
                    <div className="input-remember">
                        <input
                            type="checkbox"
                            id="remember-me"
                            checked={rememberMe}
                            onChange={handleCheckboxChange}/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <Button
                        buttonText="Sign In"
                        buttonClass="CTA-button"
                    />
                    {isLoading && <div>Loading...</div>}
                    {error && <div className="error">{error}</div>}
                </form>
            </section>
        </>
    );
};

export default FormSignIn;