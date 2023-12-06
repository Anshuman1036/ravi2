const API_Key="036551e83e36dc5731fb6a4845a36862";


async function showweather(){
    let city="goa";

    const response= await fetch('http://api.openweathermap.org/data/2.5/weather?q=${city}$appid=${API_key}$units=metric');
 
const data=await response.json();
console.log("weather data->:"+$(data));
let newpara= document.createElement('p');
newpara.textcontent='${data?.main?.temp.tofixed(2)} C'
document.body.appendChild('newpara');

}
