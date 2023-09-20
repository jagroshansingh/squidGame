import {
  GET_CLICK_COUNT,
  GET_TIMER,
  GET_GAMEOVER_STATUS,
  GET_STARTGAME_NOD,
  GET_WINNER_STATUS,
  TIMEOVER_STATUS,
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
const getGameOverStatusAction = () => {
  return { type: GET_GAMEOVER_STATUS };
};
const getWinnerStatusAction = () => {
  return { type: GET_WINNER_STATUS };
};
const TimeOverAction = () => {
  return { type: TIMEOVER_STATUS };
};

export {
  getStartGameNodAction,
  getClickCountAction,
  getTimerAction,
  getGameOverStatusAction,
  getWinnerStatusAction,
  TimeOverAction,
};
