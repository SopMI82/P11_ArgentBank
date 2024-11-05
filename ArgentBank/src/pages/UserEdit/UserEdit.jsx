import FormEdit from "../../containers/FormEdit/FormEdit";
import './UserEdit.css';
import { useSelector} from 'react-redux';

const UserEdit = () => {
    
      // Utilise l'ID pour charger les informations de l'utilisateur depuis le store Redux
      const { userProfile } = useSelector((state) => state.auth);

    return (

        <div>
            <main className="main bg-dark">
                <FormEdit userProfile={userProfile} />
            </main>
        </div>
    );
};

export default UserEdit;