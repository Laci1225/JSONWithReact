import { useState} from 'react'
import './App.css'
import axios from "axios"
import Refresh from "./components/Refresh.jsx";
import FactText from "./components/FactText.jsx";
import AnimalType from "./components/AnimalType.js";
import CreateDate from "./components/CreateDate.jsx";

const httpClient = axios.create({baseURL: "https://cat-fact.herokuapp.com", headers: {}})

function App() {
    const [text, setText] = useState();
    const [type, setType] = useState();
    const [createDate, setCreateDate] = useState();
    const [change, setChange] = useState(0);
    return (
        <>
            <div>
                <div className="text_color">{text}</div>
                <div className="type">{type}</div>
                <div className="type">{createDate}</div>
                <FactText httpClient={httpClient} setText={setText} change={change}/>
                <AnimalType httpClient={httpClient} setType={setType} change={change}/>
                <CreateDate httpClient={httpClient} setCreateDate={setCreateDate} change={change}/>
                <Refresh onClick={() => {
                    setChange(prevState => prevState + 1);
                }}/>
            </div>
        </>
    )
}

export default App
