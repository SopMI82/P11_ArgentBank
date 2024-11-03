import './AccountOverview.css';
import PropTypes from "prop-types";
import Button from "../../components/Button/Button";

const AccountOverview = ({ accountTitle, accountAmount, accountAmountDescr }) => {
    return (
        <div>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">{accountTitle}</h3>
                    <p className="account-amount">{accountAmount}</p>
                    <p className="account-amount-description">{accountAmountDescr}</p>
                </div>

                <div className="account-content-wrapper cta">
                    <Button
                        buttonText="View transactions"
                        buttonClass="transaction-button"
                    />
                </div>
            </section>
        </div>
    );
};

export default AccountOverview;

AccountOverview.propTypes = {
    accountTitle: PropTypes.string.isRequired,
    accountAmount: PropTypes.string.isRequired,
    accountAmountDescr: PropTypes.string.isRequired,
};