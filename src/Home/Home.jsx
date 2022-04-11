import React from 'react'
import { QuoteData } from '../Data';
import { useEffect,useState } from 'react';
import "../Home/Home.css"

const Home = () => {
    const randomQuote = Math.floor(Math.random() * Math.floor(QuoteData.length));

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
      },[]); 

  return (
    <div>
    <h1>{QuoteData[randomQuote].quote}</h1>
    <div>
                  <p>
                    {ques} {userName}
                  </p>
                  <input className="user-input"
                    style={nameStyle}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                  <button className="btn-submit" style={nameStyle} onClick={handelBtn}>
                    submit
                  </button>

                  <div style={userGoalStyle}>
                    <input className="user-input"
                      style={goalStyle}
                      onChange={(event) => {
                        setGoal(event.target.value);
                      }}
                    />

                    <button className="btn-submit" style={goalStyle} onClick={handelGoal}>
                      my goal
                    </button>
                  </div>

                  <p> {userGoal}</p>
                </div>
              </div>
    
  )
}

export {Home}