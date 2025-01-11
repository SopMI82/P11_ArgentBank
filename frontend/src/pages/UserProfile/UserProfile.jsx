import "./UserProfile.css";
import { useDispatch, useSelector } from 'react-redux'; // Import du hook useSelector
import Button from "../../components/Button/Button";
import AccountOverview from "../../containers/AccountOverview/AccountOverview";
import { useEffect } from 'react';
import { getUserProfile, selectIsOpened, selectUserName, setIsOpened } from "../../redux/features/auth/authSlice";
import FormEdit from "../../containers/FormEdit/FormEdit";

const UserProfile = () => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    
    // Récupération des données utilisateur depuis le store Redux
    const { userProfile } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);

    const isOpened = useSelector(selectIsOpened);
    
    const handleEditClick = () => {
        dispatch(setIsOpened(true)); // bascule vers l'affichage du formulaire
    };

    return (
        <div>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br/>{userName} !</h1>
                    {!isOpened && (
                        <Button
                        buttonText="Edit Name"
                        buttonClass="CTA-button"
                        onClick={handleEditClick}
                    />
                    )}
                    {isOpened && (
                        <FormEdit userProfile={userProfile} />
                    )}
                    
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