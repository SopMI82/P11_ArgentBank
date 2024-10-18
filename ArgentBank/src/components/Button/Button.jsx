import './Button.css';
import { PropTypes } from 'prop-types';

const Button = ({buttonText, buttonClass}) => {
    return (
        <div>
            <button className={buttonClass}>{buttonText}</button>
        </div>
    );
};

export default Button;

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    buttonClass: PropTypes.string.isRequired,
};