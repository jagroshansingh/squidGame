import React, { useEffect, useRef } from "react";
import "./css/GreenLightRedLight.css";
import { useDispatch, useSelector } from "react-redux";
import {
  TimeOverAction,
  getClickCountAction,
  getStartGameNodAction,
  getTimerAction,
} from "../redux/action";

export const GreenLightRedLight = () => {
  let ref = useRef("");
  let timerRef = useRef("");
  const dispatch = useDispatch();
  const { TimeOver, startGame, Timer, clickCount } = useSelector(
    (store) => store
  );

  const handleClick = (e) => {
    if (e.target.style.backgroundColor == "green")
      dispatch(getClickCountAction());
  };

  if (!startGame) {
    useEffect(() => {
      let box = document.querySelector(".box");
      clearInterval(ref.current);
      ref.current = setInterval(() => {
        box.style.backgroundColor = `${
          box.style.backgroundColor == "red" || box.style.backgroundColor == ""
            ? "green"
            : "red"
        }`;
      }, 1500);
    }, []);

    useEffect(() => {
      //-------------------game duration-----------------------
      setTimeout(() => {
        dispatch(TimeOverAction());
      }, 10000);

      //------------------1 second timer------------------------
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        dispatch(getTimerAction());
      }, 1000);
    }, []);

    useEffect(()=>{
        clearInterval(timerRef.current)
    },[TimeOver])

    return (
      <div>
        <h2>{Timer}</h2>
        <button className="box" onClick={handleClick}>
          Color
        </button>
        <h2>{clickCount}</h2>
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
