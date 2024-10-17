import Button from "../../components/Button/Button";
import Field from "../../components/Field/Field";
import './Form.css'

const Form = () => {
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
                    <Button />
                </form>
            </section>
        </>
    );
};

export default Form;