import React from "react";
import Landing from './Landing'
import Vdot from "./Vdot";
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/vdot' element={<Vdot />}/>
      </Routes>
    </>
  )

}

export default App