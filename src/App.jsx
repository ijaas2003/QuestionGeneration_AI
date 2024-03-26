import { useState } from 'react'
import './App.css'
import Login from './components/user/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
