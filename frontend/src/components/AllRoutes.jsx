import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Authentication } from './Authentication'
import { GreenLightRedLight } from './GreenLightRedLight'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Authentication/>}/>
        <Route path='/game' element={<GreenLightRedLight/>}/>
        <Route path='*' element={<h1>Error 404: Not Found</h1>}/>
    </Routes>
  )
}
