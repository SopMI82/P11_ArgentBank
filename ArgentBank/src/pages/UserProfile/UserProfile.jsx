import "./UserProfile.css";
import Button from "../../components/Button/Button";
import AccountOverview from "../../containers/AccountOverview/AccountOverview";

const UserProfile = () => {
    return (
        <div>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <Button
                        buttonText="Edit Name"
                        buttonClass="edit-button"
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