import Collapse from '../../components/Collapse/Collapse';
import AccountOverview from './../../containers/AccountOverview/AccountOverview';

const UserTransactions = () => {
    return (
        <div>
            <main className="main bg-dark">
            <AccountOverview
                accountTitle="Argent Bank Checking (x8349)"
                accountAmount="$2,082.79"
                accountAmountDescr="Available Balance"
            />
            <Collapse></Collapse>
            </main>
        </div>
    );
};

export default UserTransactions;