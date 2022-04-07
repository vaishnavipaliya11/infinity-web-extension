import React from "react";
import { QuoteData } from "../Data";
import { useEffect, useState } from "react";
import "../Home/Home.css";
import axios from "axios";

const Home = () => {
  const randomQuote = Math.floor(Math.random() * Math.floor(QuoteData.length));
  const newDate =  Date();

  const [data, setData] = useState({});
  const [ques, setQues] = useState("what is your name?");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [goal, setGoal] = useState("");
  const [userGoal, setUserGoal] = useState("");
  const [nameStyle, setStyle] = useState();
  const [goalStyle, setGoalStyle] = useState({ display: "none" });
  const [userGoalStyle, setUserGoalStyle] = useState({ display: "block" });

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
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?')";
  }, []);

  const url =
    "https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&city=Nagpur&country=India&key=cffbc1552ecc4605bb2e50e9a86243ab";

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data.data[0]));
  }, []);

  const apiData = [
    {
      cityName: data.city_name,
      date: data.datetime,
      temp: data.temp,
      windSpeed: data.wind_spd,
      windDirection: data.wind_cdir_full,
    },
  ];

  return (
    <div className="bg-img-container">

      <h1>
        {apiData.map(({ cityName, date, temp, windSpeed, windDirection }) => {
          return (
            <div className="weather">
              <div className="display-row topnav text-color">
                <p>{cityName}</p>

                <p>
                  <span>
                    <i class="bi bi-clouds"></i>
                  </span>
                  {temp}°C
                </p>
              </div>
              <div className="quote text-color">
                <h5>{QuoteData[randomQuote].quote}</h5>
                <p>{newDate}</p>

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

              <div className="display-row footer text-color">
                <p>{windDirection}</p>
                <p>WindSpeed : {windSpeed}(m/s)</p>
              </div>
            </div>
          );
        })}
      </h1>
    </div>
  );
};

export { Home };
