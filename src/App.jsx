import { useEffect, useState } from 'react'
import McqLogin from './components/user/Login'
import FacultyLogin from './components/faculty/Login'
import Home from './components/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FacultyDashBoard from './components/faculty/DashBoard'
import Register from './components/faculty/Register'
import DashBoard from './components/user/Dashboard'
import Exam from './components/user/Exam'
import TestPage from './components/faculty/time'
import LoginToDash from './components/user/LoginToDash'
import Mcq from './components/user/Mcq'
import StudentReg from './components/user/Register'
import Activity from './components/user/Activity'
import Data from './components/faculty/Data'
import 'react-circular-progressbar/dist/styles.css';
import { Navigate } from 'react-router-dom'


function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('userId') !== null);

  return (
    <BrowserRouter>
      <ToastContainer position='top-center'/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/McqLogin' element={<McqLogin />} />
        <Route path='/StudentReg' element={<StudentReg />} />
        <Route path='/StudentLogin' element={<LoginToDash /> } />
        <Route path='/StudentDashBoard' element={<DashBoard />} />
        <Route path='/FacultyLogin' element={<FacultyLogin />} />
        <Route path='/Exam' element={<Exam />} />
        <Route path='/Data' element={<Data />} />
        <Route path='/FacultyRegister' element={<Register />} />
        <Route path='/PublisherDashBoard' element={<FacultyDashBoard />} />
        <Route path='/Mcq' element={<Mcq />} />
        <Route path='/Activity' element={<Activity />} />
        <Route path='/time' element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
