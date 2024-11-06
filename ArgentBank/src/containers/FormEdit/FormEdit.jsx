import Button from "../../components/Button/Button";
import Field from "../../components/Field/Field";
import './FormEdit.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; // Import du hook useSelector
import { getUserProfile, updateUserName } from "../../redux/features/auth/authSlice";


const FormEdit = () => {

    const dispatch = useDispatch();
    const { userId, userProfile, isLoading} = useSelector((state) => state.auth);
    const [userName, setUserName] = useState('');

    // S'assurer que les données du profil sont chargées au montage
    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);

    // Mettre à jour le userName local quand userProfile change
    useEffect(() => {
        if (userProfile?.userName) {
            setUserName(userProfile.userName);
        }
    }, [userProfile]);



    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const navigate = useNavigate();

    const onCancel = () => {
        navigate(`/user/${userId}`);
    };


    //ici on doit enregistrer la nouvelle valeur de userName dans le state avant de rediriger l'utilisateur sur la page profil (où in devraivoir "Welcome back {new userName} !")
    const onSave = async (e) => {
        e.preventDefault(); // Empêcher le rechargement par défaut du formulaire
        try {
            const resultAction = await dispatch(updateUserName({ userName })).unwrap();
            if (resultAction) {
                // Recharger le profil pour s'assurer d'avoir les dernières données
                await dispatch(getUserProfile());
                navigate(`/user/${userId}`);
            }
        } catch (err) {
            console.error('Échec de la mise à jour:', err);
        }
    };

    return (
        <>
            <section className="edit-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {isLoading ? ( // Utilisation de isLoading
                    <p>Loading...</p>
                ) : (
                <form onSubmit={onSave}>
                    <Field // ce champ doit faire apparaitre le username et doit être modifiable
                        id="username"
                        labelText="User Name"
                        value={userName}
                        onChange={handleUserNameChange}
                    />
                    <Field //ce champ doit être désactivé, il doit faire apparaitre le prénom lié à l'id
                        id="FirstName"
                        labelText="First Name"
                        value={userProfile?.firstName || ''}
                        onChange={() => { }} //desactivation du champ
                        disabled={true}
                    />
                    <Field //ce champ doit être désactivé, il doit faire apparaitre le nom lié à l'id
                        id="LastName"
                        labelText="Last Name"
                        value={userProfile?.lastName || ''}
                        onChange={() => { }} //desactivation du champ
                        disabled={true}
                    />
                    <div className="CTA-buttons">
                        <Button // ce bouton remplace l'username de la database et renvoie à la page user/profile, attention, le nom doit être remplacé en temps réel dans le header.
                            buttonText="Save"
                            buttonClass="save-button"
                            type="submit"
                        />
                        <Button // ce bouton revient à la page user/profile
                            buttonText="Cancel"
                            buttonClass="cancel-button"
                            onClick={onCancel}
                            type="button"
                        />
                    </div>
                </form>
                )}
            </section>
        </>
    );
};

export default FormEdit;