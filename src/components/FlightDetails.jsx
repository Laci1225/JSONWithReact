import PropTypes from "prop-types";
import {forwardRef, useImperativeHandle, useState} from "react";


const FlightDetails = forwardRef(({details}, ref) => {
    const [state, setState] = useState(true);
    useImperativeHandle(ref,()=>{return {setState}},[]);
    return (
        <div>{state ? <div className="type">{details ?? "No description"}</div> : "Closed"}</div>

    )
})
FlightDetails.propTypes = {
    details: PropTypes.string,
}
FlightDetails.displayName = "FlightDetails";

export default FlightDetails