import PropTypes from "prop-types";

export default function FlightDetails({details}){
    return (
        <div className="type">{details ?? "No description"}</div>
    )
}
FlightDetails.propTypes = {
    details: PropTypes.string,
}