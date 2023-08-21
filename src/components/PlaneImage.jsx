import PropTypes from 'prop-types';

export default function PlaneImage(props) {
    return (
        <div className="type"><img src={props.information?.links?.patch?.small} alt="no image for this"/></div>
    )
}
PlaneImage.propTypes = {
    information: PropTypes.shape({links: PropTypes.shape({patch: PropTypes.shape({small: PropTypes.string})})}),
    change: PropTypes.number
}