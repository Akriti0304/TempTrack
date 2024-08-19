import SearchBox from "./SearchBox.jsx";
import Info from "./Info.jsx";
import { useState } from "react";

export default function Weather(){

    let [weatherInfo,setWeatherInfo]=useState(
        {
            feelsLike :40.05,
            humidity :66,
            maxTemp:33.05,
            minTemp: 33.05,
            name: "Delhi",
            temp: 33.05,
            weather:"Haze",
            }
    );

    let fetchInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <>
            <SearchBox fetchInfo={fetchInfo}/>
            <Info Info={weatherInfo} />
        </>
    );
}