import {useEffect, useState} from "react";
import httpClient from "../api/common.js";
import PropTypes from "prop-types";

export default function usePlaneData(props) {
    const [selectedFlight, setSelectedFlight] = useState()
    useEffect(() => {
        httpClient.get("v5/launches/")
            .then(response => {
                    const flights = response.data;
                    const selectedFlight = flights[props.index];
                    setSelectedFlight(selectedFlight)
                }
            );
    }, [props.index]);
    return selectedFlight;
}
usePlaneData.propTypes = {
    index: PropTypes.number
}
usePlaneData.defaultProps = {
    index: 1
}