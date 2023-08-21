import {useEffect} from "react";

export default function FactText(props) {

    useEffect(() => {
        props.httpClient.get("/facts/random")
            .then(value => props.setText(value.data.text)
            );
    }, [props.change]);
}