import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Login from './components/login.tsx'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='text-3xl font-bold text-gray-800 text-center'>
    <Login/>
    </div>
  )
}

export default App
