import {useCallback, useEffect, useState} from "react";
import httpClient from "../api/common.js";
import PropTypes from "prop-types";

export default function usePlaneData(props) {
    const [selectedFlight, setSelectedFlight] = useState()
    const loadData = useCallback(() => {
        return httpClient.get("v5/launches/");
    }, []);
    useEffect(() => {
        loadData()
            .then(response => {
                    const flights = response.data;
                    const selectedFlight = flights[props.index];
                    setSelectedFlight(selectedFlight)
                }
            );
    }, [loadData, props.index]);
    return selectedFlight;
}
usePlaneData.propTypes = {
    index: PropTypes.number
}
usePlaneData.defaultProps = {
    index: 1
}
