import Button from "../../components/Button/Button";
import Field from "../../components/Field/Field";
import './FormEdit.css'

const FormEdit = () => {
    return (
        <>
            <section className="edit-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <Field // ce champ doit faire apparaitre le username et doit être modifiable
                        id="username"
                        labelText="User Name"
                    />
                    <Field //ce champ doit être désactivé, il doit faire apparaitre le prénom lié à l'id
                        id="FirstName"
                        labelText="First Name"
                    />
                    <Field //ce champ doit être désactivé, il doit faire apparaitre le nom lié à l'id
                        id="LastName"
                        labelText="Last Name"
                    />
                    <div className="CTA-buttons">
                    <Button // ce bouton remplace l'username de la database et renvoie à la page user/profile, attention, le nom doit être remplacé en temps réel dans le header.
                        buttonText="Save"
                        buttonClass="save-button"
                    />
                    <Button // ce bouton revient à la page user/profile
                        buttonText="Cancel"
                        buttonClass="cancel-button"
                    />
                    </div>
                </form>
            </section>
        </>
    );
};

export default FormEdit;