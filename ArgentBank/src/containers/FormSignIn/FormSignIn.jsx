import Button from "../../components/Button/Button";
import Field from "../../components/Field/Field";
import './FormSignIn.css'

const FormSignIn = () => {
    return (
        <>
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <Field
                        id="username"
                        labelText="Username"
                    />
                    <Field
                        id="password"
                        labelText="Password"
                    />
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <Button
                        buttonText="Sign In"
                        buttonClass="sign-in-button"
                    />
                </form>
            </section>
        </>
    );
};

export default FormSignIn;