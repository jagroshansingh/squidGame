import {
  GET_CLICK_COUNT,
  GET_TIMER,
  SET_GAMEOVER_STATUS,
  GET_STARTGAME_NOD,
  SET_WINNER_STATUS,
  TIMEOVER_STATUS,
  SET_LEVEL,
} from "./actionTypes";

const getStartGameNodAction = () => {
  return { type: GET_STARTGAME_NOD };
};

const getTimerAction = () => {
  return { type: GET_TIMER };
};
const getClickCountAction = () => {
  return { type: GET_CLICK_COUNT };
};
const setGameOverStatusAction = () => {
  return { type: SET_GAMEOVER_STATUS };
};
const setWinnerStatusAction = () => {
  return { type: SET_WINNER_STATUS };
};
const TimeOverAction = () => {
  return { type: TIMEOVER_STATUS };
};

const setLevelAction=(payload)=>{
  return {type:SET_LEVEL,payload}
}

export {
  getStartGameNodAction,
  getClickCountAction,
  getTimerAction,
  setGameOverStatusAction,
  setWinnerStatusAction,
  TimeOverAction,
  setLevelAction
};
