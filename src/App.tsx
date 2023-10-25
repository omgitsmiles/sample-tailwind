import Landing from './Landing'
import Vdot from "./Vdot";
import Calender from './Calender';
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/vdot' element={<Vdot />}/>
        <Route path='/calender' element={<Calender />} />
      </Routes>
    </>
  )

}

export default App