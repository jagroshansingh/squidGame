import { GET_CLICK_COUNT, GET_GAMEOVER_STATUS, GET_STARTGAME_NOD, GET_TIMER, TIMEOVER_STATUS } from "./actionTypes"

let initialState={
    startGame:false,
    Timer:40,
    clickCount:0,
    isGameOver:false,
    isWinner:false,
    TimeOver:false
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_TIMER:return {...state,Timer:state.Timer-1}
        case GET_CLICK_COUNT: return {...state,clickCount:state.clickCount+1}
        case GET_STARTGAME_NOD: return {...state,startGame:false}
        case GET_GAMEOVER_STATUS: return {...state,isGameOver:true}
        case TIMEOVER_STATUS: return {...state,TimeOver:true}
        default: return state
    }
}