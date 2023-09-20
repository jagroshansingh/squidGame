import { TIMEOVER_STATUS } from "./actionTypes"

let initialState={
    colorTimer:0,
    clickCount:0,
    isGameOver:false,
    isWinner:false,
    TimeOver:false
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case TIMEOVER_STATUS: return {...state,TimeOver:true}
        default: return state
    }
}