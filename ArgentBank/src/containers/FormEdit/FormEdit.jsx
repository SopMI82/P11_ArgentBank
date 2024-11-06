import Button from "../../components/Button/Button";
import Field from "../../components/Field/Field";
import './FormEdit.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import du hook useSelector


const FormEdit = () => {
       const { userId } = useSelector((state) => state.auth);

    const navigate = useNavigate();

    const onCancel = () => {
        navigate(`/user/${userId}`);
    };

    const onSave = () => {
        //ici on doit enregistrer la nouvelle valeur de userName dans le state avant de rediriger l'utilisateur sur la page profil (où in devraivoir "Welcome back {new userName} !")
        navigate(`/user/${userId}`);
    };

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
                        onClick={onSave}
                    />
                    <Button // ce bouton revient à la page user/profile
                        buttonText="Cancel"
                        buttonClass="cancel-button"
                        onClick={onCancel}
                    />
                    </div>
                </form>
            </section>
        </>
    );
};

export default FormEdit;