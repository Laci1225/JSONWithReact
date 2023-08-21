import PropTypes from "prop-types";

export default function IsFlightSuccessful({isSuccessful}) {
    return (
        <div className="type">Was flight successful: {isSuccessful ? isSuccessful?.toString() : "NA"}</div>
    )
}
IsFlightSuccessful.propTypes = {
    isSuccessful: PropTypes.bool
}