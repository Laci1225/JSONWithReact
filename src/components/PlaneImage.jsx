import PropTypes from 'prop-types';
import {useMemo} from "react";

export default function PlaneImage(props) {
    const altText =useMemo(() => {
        return props.information?.links?.patch?.small ? "altText for src" : "no image for this"
    }, [props.information?.links?.patch?.small])
    return (
        <div className="type"><img src={props.information?.links?.patch?.small} alt={altText}/></div>
    )
}
PlaneImage.propTypes = {
    information: PropTypes.shape({links: PropTypes.shape({patch: PropTypes.shape({small: PropTypes.string})})}),
    change: PropTypes.number
}