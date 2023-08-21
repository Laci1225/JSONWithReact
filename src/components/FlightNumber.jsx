import PropTypes from "prop-types";

export default function FlightNumber(props) {
    const fNumber = props.information?.flight_number
    return (
        <div className="type">Flight number: {fNumber ? fNumber : "NA"}</div>
    )
}
FlightNumber.propTypes = {
    information: PropTypes.object,
    change: PropTypes.number
}