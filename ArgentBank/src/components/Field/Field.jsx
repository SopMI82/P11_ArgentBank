import PropTypes from "prop-types";

const Field = ({ id, labelText }) => {

    return (
        <div>
            <div className="input-wrapper">
                <label htmlFor={id}>{labelText}</label>
                <input type="text" id={id} />
            </div>
        </div>
    );
};

export default Field;

Field.propTypes = {
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
};