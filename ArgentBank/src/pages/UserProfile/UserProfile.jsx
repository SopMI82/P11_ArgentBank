import "./UserProfile.css";
import { useSelector } from 'react-redux'; // Import du hook useSelector
import { useNavigate } from 'react-router-dom';
import Button from "../../components/Button/Button";
import AccountOverview from "../../containers/AccountOverview/AccountOverview";

const UserProfile = () => {

    // Récupération des données utilisateur depuis le store Redux
    const { userProfile } = useSelector((state) => state.auth);

    // Destructuring des données utilisateur
    const { userName } = userProfile || { userName:'' };
    const { userId } = useSelector((state) => state.auth);

    const navigate = useNavigate();

    const handleEditClick = () => {
        navigate(`/user/${userId}/edit`);
    };

    return (
        <div>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{userName} !</h1>
                    <Button
                        buttonText="Edit Name"
                        buttonClass="edit-button"
                        onClick={handleEditClick}
                    />
                </div>
                <h2 className="sr-only">Accounts</h2>
                <AccountOverview
                    accountTitle="Argent Bank Checking (x8349)"
                    accountAmount="$2,082.79"
                    accountAmountDescr="Available Balance"
                />
                <AccountOverview
                    accountTitle="Argent Bank Savings (x6712)"
                    accountAmount="$10,928.42"
                    accountAmountDescr="Available Balance"
                />
                <AccountOverview
                    accountTitle="Argent Bank Credit Card (x8349)"
                    accountAmount="$184.30"
                    accountAmountDescr="Current Balance"
                />
            </main>
        </div>
    );
};

export default UserProfile;