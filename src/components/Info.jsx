import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./Info.css"



export default function Info({Info}){
    
    let cold="https://images.unsplash.com/photo-1477468572316-36979010099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    let hot="https://media.istockphoto.com/id/540761642/photo/thermometer-sun-40-degres-hot-summer-day-high-summer-temperatures.webp?b=1&s=612x612&w=0&k=20&c=2ig7q6YgVNXcg9iARerIQt2KhajZWQ21KPpBmv23k3o=";
    let rain="https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW58ZW58MHx8MHx8fDA%3D";

    return(
<div id="info" >
    <Card id="card" sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            sx={{ maxWidth: 345 }}
            image={Info.weather=="Rain" ? rain:Info.temp <17 ? cold :Info.humidity>80?rain:hot}
            alt="Haze in Delhi"
        />
        <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
                {Info.name} {Info.weather=="Rain" ? <ThunderstormIcon/>:Info.temp <17 ?<AcUnitIcon/> :Info.humidity>80? <ThunderstormIcon/> :<WbSunnyIcon/>}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
                Weather: {Info.weather}
            </Typography>
            <Typography variant="h6" color="primary">
                Temperature: {Info.temp}&deg; C
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
                Minimum Temperature: {Info.minTemp}&deg; C Maximum Temperature: {Info.maxTemp}
                &deg; C Humidity: {Info.humidity}%
            </Typography>
            <Typography variant="body3">
                Feels Like: {Info.feelsLike}&deg; C
            </Typography>
        </CardContent>
    </Card>
</div>
    );
}