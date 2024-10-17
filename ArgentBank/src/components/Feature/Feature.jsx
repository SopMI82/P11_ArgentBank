import PropTypes from "prop-types";

const Feature = ({featureIcon, featureIconAlt, featureTitle, featureDetail}) => {

    return (
        <div className="feature-item">
            <img src={featureIcon} alt={featureIconAlt} className="feature-icon" />
            <h3 className="feature-item-title">{featureTitle}</h3>
            <p>{featureDetail}</p>
        </div>
    );
};

export default Feature;

Feature.propTypes = {
    featureIcon: PropTypes.string.isRequired,      // L'URL de l'icône doit être une chaîne (obligatoire)
    featureIconAlt: PropTypes.string.isRequired,   // Le texte alternatif doit être une chaîne (obligatoire)
    featureTitle: PropTypes.string.isRequired,     // Le titre doit être une chaîne (obligatoire)
    featureDetail: PropTypes.string.isRequired,    // Le détail doit être une chaîne (obligatoire)
};