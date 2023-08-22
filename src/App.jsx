import {useCallback, useRef, useState} from 'react'
import './App.css'
import Refresh from "./components/Refresh.jsx";
import PlaneImage from "./components/PlaneImage.jsx";
import FlightDetails from "./components/FlightDetails.jsx";
import IsFlightSuccessful from "./components/IsFlightSuccessful.jsx";
import FlightNumber from "./components/FlightNumber.jsx";
import usePlaneData from "./hooks/usePlaneData.js";

function App() {
    const [change, setChange] = useState(0);
    const value = useRef(0)
    const element = useRef();
    const component = useRef();
    const data = usePlaneData({index: change})
    const refresh = useCallback(() => {
        //console.log(component.current.setState(false));
        setChange(Math.floor(Math.random() * 200));
    },[])
    return (
        <>
            <div className="other" ref={element}>
                <div>{value.current}</div>
                <div className="p-center"><FlightDetails details={data?.details} ref={component}/></div>
                <div className="p-center"><PlaneImage information={data}/></div>
                <div className="one-row-flex">
                    <div className="one-row-flex2">
                        <div className="p-center"><FlightNumber information={data}/></div>
                        <div className="p-center"><IsFlightSuccessful isSuccessful={data?.success}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-center"><Refresh onClick={refresh}/>
            </div>
        </>
    )
}

export default App
