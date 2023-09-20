import React from 'react'
import './css/Authentication.css'
import { useDispatch, useSelector } from 'react-redux'
import { setLevelAction } from '../redux/action'
import { useNavigate } from 'react-router-dom'

export const Authentication = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const level=useSelector(store=>store.level)

    const handleLevel=(e)=>{
        switch(e.target.innerText){
            case 'Easy': dispatch(setLevelAction(10))
                        break;
            case 'Medium': dispatch(setLevelAction(15))
                        break;
            case 'Hard': dispatch(setLevelAction(25))
                        break;
            default: break;
        }
        navigate('/game')
    }
  return (
    <div>
        <div id='levels'>
        <button onClick={handleLevel}>Easy</button>
        <button onClick={handleLevel}>Medium</button>
        <button onClick={handleLevel}>Hard</button>
        </div>
    </div>
  )
}
