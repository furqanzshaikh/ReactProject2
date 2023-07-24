import React, { useState } from "react";
import axios from "axios";
import "./index.css";



function App() {

  const [data,setData] = useState({})  

  const [location,setLocation] = useState("")



   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=centigrade&appid=373dff0817cca93ddb7554931dcbf9e6`

  const searchLocation=()=>{
    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response)
      
    })

  }
  const btnsearch=(event)=>{
    if (event.key==="Enter"){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response)

        
      })
    }
  }


  return (
    <div className="app">
      <div className="search"  >
        <input 
        value={location}
        onKeyPress={btnsearch}
        onChange={event => setLocation(event.target.value)}
        placeholder="Enter Location"
        type="text"/>
      <button  className="button"
      onClick={searchLocation}
      >&#128269; 
      </button>
      </div>
      
      <div className="conatainer">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          
          <div className="temp">
            {data.main ?<h1> {Math.round(data.main.temp - 273.15)} &deg;C </h1> : null}
          </div> 
    
        </div>
        <div className="bottom">
          <div className="feels">
          {data.main ?
            <p className="bold"> {Math.round(data.main.feels_like - 273.15)} &deg; C</p>: null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? 
            <p className="bold"> {data.main.humidity}%</p>: null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ?
            <p className="bold"> {data.wind.speed}MPH</p> :null }
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
 