import { useState } from 'react'
import StudentLogin from './components/user/Login'
import FacultyLogin from './components/faculty/Login'
import Home from './components/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0);
  
  return (
    
      <BrowserRouter>
      <ToastContainer position='top-center'/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/StudentLogin' element={<StudentLogin />}/>
          <Route path='/FacultyLogin' element={<FacultyLogin />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App