import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {counterContext} from './contex/context'

function App() {
  const [count,setCount]=useState(0);

  // const handleCount=()=>{
  //   setCount(count+1)
  // } 

  return (
    <>
    <counterContext.Provider value={{count,setCount}}>
    <div><Navbar/></div>
    {/* <div onClick={handleCount}>click</div> */}
    </counterContext.Provider>
    </>
  )
}

export default App
