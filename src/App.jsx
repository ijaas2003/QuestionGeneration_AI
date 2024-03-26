import { useState } from 'react'
import Login from './components/user/Login'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
