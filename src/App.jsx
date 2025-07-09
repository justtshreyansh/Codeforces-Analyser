import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './pages/Profile'
import Username from './components/Username'
import { Context } from './context/Context'
import { useContext } from 'react'
function App() {
  const {data} = useContext(Context);
 
  return (
    <>
    
    
     <Username/>
     <Profile/>
    </>
  )
}

export default App
