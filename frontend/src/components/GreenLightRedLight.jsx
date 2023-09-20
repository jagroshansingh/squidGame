import React, { useEffect, useRef } from "react";
import "./css/GreenLightRedLight.css";
import { useDispatch, useSelector } from "react-redux";
import {
  TimeOverAction,
  getClickCountAction,
  setGameOverStatusAction,
  getStartGameNodAction,
  getTimerAction,
  setWinnerStatusAction,
} from "../redux/action";

export const GreenLightRedLight = () => {
  let colorRef = useRef("");
  let timerRef = useRef("");
  const dispatch = useDispatch();
  const { TimeOver, startGame, Timer, clickCount, isGameOver, level, isWinner } = useSelector(
    (store) => store
  );

  const handleClick = (e) => {
    if (e.target.style.backgroundColor == "green")
      dispatch(getClickCountAction());

    if (e.target.style.backgroundColor == "red")
      dispatch(setGameOverStatusAction());
  };

  if (!startGame) {

    useEffect(() => {
      //----------------   switching colors----------------------
      let box = document.querySelector(".box");
      clearInterval(colorRef.current);
      colorRef.current = setInterval(() => {
        box.style.backgroundColor = `${
          box.style.backgroundColor == "red" || box.style.backgroundColor == ""
            ? "green"
            : "red"
        }`;
      }, 1500);

      //-------------------game duration-----------------------
      setTimeout(() => {
        dispatch(TimeOverAction());
      }, 10000);

      //------------------1 second timer------------------------
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        dispatch(getTimerAction());
      }, 1000);

      if(TimeOver) dispatch(setGameOverStatusAction())

    }, [TimeOver]);

    useEffect(()=>{
      if(clickCount>=level) dispatch(setWinnerStatusAction())
    },[clickCount])


    if (TimeOver || isGameOver) {
      clearInterval(timerRef.current);
      clearInterval(colorRef.current);
    }

    return (
      <div>
        {isGameOver ? (
          <div>
            <h1>Game Over!</h1>
            <h2></h2>
          </div>
        ) : (
          <div>
            <h2>Time Left: {Timer}</h2>
            <button className="box" onClick={handleClick}>
              Color
            </button>
            <h2>Click Count: {clickCount}/{level}</h2>
          </div>
        )}
      </div>
    );
  } else
    return (
      <div>
        <button onClick={() => dispatch(getStartGameNodAction())}>
          Start Game
        </button>
      </div>
    );
};
