import React from "react";
import { QuoteData } from "../Data";
import { useEffect, useState } from "react";
import "../Home/Home.css";
import axios from "axios";

const Home = () => {
  const randomQuote = Math.floor(Math.random() * Math.floor(QuoteData.length));
  const today = new Date();
  const newDate =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const todayDate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const [data, setData] = useState({});
  const [ques, setQues] = useState("what is your name?");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [goal, setGoal] = useState("");
  const [userGoal, setUserGoal] = useState("");
  const [nameStyle, setStyle] = useState();
  const [goalStyle, setGoalStyle] = useState({ display: "none" });
  const [userGoalStyle, setUserGoalStyle] = useState({ display: "block" });
  const [userQuote, setUserQuote] = useState("")
  function handelBtn() {
    setQues("Good Evening");
    setUserName(name);
    setStyle({ display: "none" });
    setGoalStyle({ display: "inline" });
  }

  function handelGoal() {
    setUserGoal(goal);
    setUserGoalStyle({ display: "none" });
  }

  useEffect(() => {
    try {
    axios.get("https://api.quotable.io/random?maxLength=40").then((res) => setUserQuote(res.data.content));
  
  
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?')";
  }, []);

  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=35.7796&lon=-78.6382&appid=cdbfc1f246c44295625967cd2f226343&units=metric";

  useEffect(() => {
    try {
      axios.get(url).then((res) => setData(res.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(data);
  // console.log(quotes);

  const apiData = [
    {
      cityName: data.city_name,
      date: data.datetime,
      temp: data?.main?.temp,
      windSpeed: data?.wind?.speed,
      windDeg: data?.wind?.deg,
      windDirection: data.wind_cdir_full,
      description: data?.weather?.[0]?.description,
    },
  ];
  console.log(data?.weather?.[0]?.description);
  return (
    <div>
      {apiData.map(
        ({ description, windDeg, temp, windSpeed, windDirection }) => {
          return (
            <div className="weather">
              <div className="display-row topnav text-color">
                <div className="display-column temp-heading">
                  <h2>Nagpur</h2>

                  <small>{temp}°C</small>
                </div>

                <div className="display-column temp-heading">
                  <h2>Date: {todayDate}</h2>
                  <small>{newDate}</small>
                </div>
              </div>
              
              <div className="quote text-color display-column">
                
              <h2>{userQuote}</h2>
                <div>
                  <p>
                    {ques} {userName}
                  </p>
                  <input
                    className="user-input"
                    style={nameStyle}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                  <button
                    className="btn-submit"
                    style={nameStyle}
                    onClick={handelBtn}
                  >
                    submit
                  </button>

                  <div style={userGoalStyle}>
                    <input
                      className="user-input"
                      style={goalStyle}
                      onChange={(event) => {
                        setGoal(event.target.value);
                      }}
                    />

                    <button
                      className="btn-submit"
                      style={goalStyle}
                      onClick={handelGoal}
                    >
                      my goal
                    </button>
                  </div>

                  <p> {userGoal}</p>
                </div>
              </div>

              <div className="display-column footer text-color">
                <h2>WindSpeed: {windSpeed}</h2>
                <small>{description}</small>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export { Home };
