import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios"
import Refresh from "./components/Refresh.jsx";

const httpClient = axios.create({baseURL: "https://cat-fact.herokuapp.com", headers: {}})

function App() {
    const [text, setText] = useState();
    const [change, setChange] = useState(0);
    useEffect(() => {
        httpClient.get("/facts/random")
            .then(value => setText(value.data.text)
            );
    }, [change]);
    return (
        <>
            <div>
                {text}
                <Refresh onClick={() => {
                    setChange(prevState => prevState + 1)
                }}/>
            </div>
        </>
    )
}

export default App
