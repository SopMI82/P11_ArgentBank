import PropTypes from "prop-types";
import "./Field.css";

const Field = ({ id, labelText, value, onChange, type = "text" }) => {

    return (
        <div>
            <div className="input-wrapper" /* il faudra ajouter une prop classe modifiable ou non */ >
                <label htmlFor={id}>{labelText}</label>
                <input
                    type={type}
                    id={id}
                    value={value}
                    onChange={onChange} />
            </div>
        </div>
    );
};

export default Field;

Field.propTypes = {
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,

};