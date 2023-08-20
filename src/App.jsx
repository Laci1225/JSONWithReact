import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios"

const httpClient = axios.create({baseURL: "https://cat-fact.herokuapp.com", headers: {}})
function App() {
    const [text, setText] = useState();
    useEffect(() => {
        httpClient.get("/facts/random")
            .then(value => setText(value.data.text)
            );
    }, []);
    return (
        <>
            <div>
                {text}
            </div>
        </>
    )
}

export default App
