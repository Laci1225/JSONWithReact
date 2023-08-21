import {useEffect} from "react";

export default function CreateDate(props) {
    useEffect(() => {
        props.httpClient.get("/facts/random")
            .then(value => props.setCreateDate(value.data.createdAt)
            );
    }, [props.change]);
}