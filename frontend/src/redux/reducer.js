import { GET_CLICK_COUNT, SET_GAMEOVER_STATUS, GET_STARTGAME_NOD, GET_TIMER, SET_WINNER_STATUS, SET_LEVEL, TIMEOVER_STATUS, RESET_GAME } from "./actionTypes"

let initialState={
    startGame:false,
    Timer:40,
    clickCount:0,
    isGameOver:false,
    isWinner:false,
    TimeOver:false,
    level:10
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_TIMER:return {...state,Timer:state.Timer-1}
        case GET_CLICK_COUNT: return {...state,clickCount:state.clickCount+1}
        case GET_STARTGAME_NOD: return {...state,startGame:false}
        case SET_GAMEOVER_STATUS: return {...state,isGameOver:true}
        case TIMEOVER_STATUS: return {...state,TimeOver:true}
        case SET_LEVEL: return {...state,level:payload}
        case SET_WINNER_STATUS: return {...state,isWinner:true}
        case RESET_GAME: return initialState
        default: return state
    }
}