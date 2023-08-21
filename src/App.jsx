import {useState} from 'react'
import './App.css'
import Refresh from "./components/Refresh.jsx";
import PlaneImage from "./components/PlaneImage.jsx";
import FlightDetails from "./components/FlightDetails.jsx";
import IsFlightSuccessful from "./components/IsFlightSuccessful.jsx";
import FlightNumber from "./components/FlightNumber.jsx";
import usePlaneData from "./hooks/usePlaneData.js";

function App() {
    const [change, setChange] = useState(0);
    const data = usePlaneData({index: change})
    return (
        <>
            <div className="other">
                <div className="p-center"><FlightDetails details={data?.details}/></div>
                <div className="p-center"><PlaneImage information={data}/></div>
                <div className="one-row-flex">
                    <div className="one-row-flex2">
                        <div className="p-center"><FlightNumber information={data}/></div>
                        <div className="p-center"><IsFlightSuccessful isSuccessful={data?.success}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-center"><Refresh onClick={() => {
                setChange(Math.floor(Math.random() * 200));
            }}/>
            </div>
        </>
    )
}

export default App
