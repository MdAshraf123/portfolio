import { useState } from 'react'
import './App.css'
import Portfolio from './components/htmlelements/portfolio';
import MainPage from './components/htmlelements/MainPage';
import Skill from './components/htmlelements/Skill';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Skill/> */}
      <MainPage/>  
    </>
  )
}

export default App

