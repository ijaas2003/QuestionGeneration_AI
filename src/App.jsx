import { useEffect, useState } from 'react'
import StudentLogin from './components/user/Login'
import FacultyLogin from './components/faculty/Login'
import Home from './components/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FacultyDashBoard from './components/faculty/DashBoard'
import Register from './components/faculty/Register'
import DashBoard from './components/user/Dashboard'
import Exam from './components/user/Exam'
import { Navigate } from 'react-router-dom'
import LoginToDash from './components/user/LoginToDash'
import Mcq from './components/user/Mcq'




function App() {
  const [count, setCount] = useState(0);
  const [LoggedIn, setLogged] = useState(false);
  
  
  return (
    
      <BrowserRouter>
      <ToastContainer position='top-center'/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/StudentLogin' element={<StudentLogin />}/>
          <Route path='/LoginToDash' element={<LoginToDash />} />
          <Route path='/StudentDashBoard' element={<DashBoard />}/>
          <Route path='/FacultyLogin' element={<FacultyLogin />}/>
          <Route path='/Exam' element={<Exam />} />
          <Route path='/FacultyRegister' element={<Register />}/>
          <Route path='/PublisherDashBoard' element={<FacultyDashBoard />} />
          <Route path='/Mcq' element={<Mcq/>} />
        
        </Routes>
      </BrowserRouter>
  )
}

export default App