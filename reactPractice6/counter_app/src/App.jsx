import Counter from '../component/counter'
import Header from '../component/Header'
import './App.css'
import themecontext from '../component/usecontext'
import { useState } from 'react'
import Clickcounter from '../component/Clickcounter'

function App() {
   const [theme,setTheme]=useState("abhi")
  return (
    <>
    <Header/>
    <Counter/>
    <Clickcounter/>
    </>
  )
}

export default App
