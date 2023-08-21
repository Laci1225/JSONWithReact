import {useEffect} from "react";

export default function AnimalType(props){
    useEffect(() => {
        props.httpClient.get("/facts/random")
            .then(value => props.setType(value.data.type)
            );
    }, [props.change]);

}