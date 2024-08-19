import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import "./SearchBox.css"


export default function Weather({fetchInfo}){

    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    let url="https://api.openweathermap.org/data/2.5/weather";
    let key=import.meta.env.VITE_API_KEY;

    let getInfo=async ()=>{
        try {
        let response= await fetch(`${url}?q=${city}&appid=${key}&units=metric`);
        let jsonResponse=await response.json();
        let info={
                    name:jsonResponse.name,
                    weather:jsonResponse.weather[0].main,
                    temp:jsonResponse.main.temp,
                    humidity:jsonResponse.main.humidity,
                    feelsLike:jsonResponse.main.feels_like,
                    minTemp:jsonResponse.main.temp_min,
                    maxTemp:jsonResponse.main.temp_max,
                 }
        return info;
        } catch (e) {
            throw e;
        }
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
    }
    let handleChange=(e)=>{
        setCity(e.target.value);
        setError(false);
    }
    
    let handleClick=async ()=>{
        try {
            let newInfo= await getInfo();
            fetchInfo(newInfo);
        } catch (err) {
            setError(true);
        }
    }
    let alert=<Stack sx={{ width: '100%' }} spacing={2}><Alert severity="error">Sorry but we don't have such city data.</Alert></Stack>;
    return(
    <>
        <form onSubmit={handleSubmit}>
             <TextField value={city} onChange={handleChange} size="small" 
             id="search" label="City" variant="filled" />
             
             <Button id='searchBtn' onClick={handleClick} 
             variant="outlined" size="large"
             ><SearchIcon/> Search</Button>
        </form>
        <br /><br />
        {error && alert}
    </>
    );
}