const getColorTimerAction=()=>{
    return ({type:'GET_COLOR_TIMER'})
}
const getClickCountAction=()=>{
    return ({type:'GET_CLICK_COUNT'})
}
const getGameOverStatusAction=()=>{
    return ({type:'GET_GAMEOVER_STATUS'})
}
const getWinnerStatusAction=()=>{
    return ({type:'GET_WINNER_STATUS'})
}
const TimeOverAction=()=>{
    return ({type:'TIMEOVER_STATUS'})
}

export {getClickCountAction,getColorTimerAction,getGameOverStatusAction,getWinnerStatusAction,TimeOverAction}