import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Game from './Game'
import Gameover from './Gameover'
import { ToastContainer } from 'react-bootstrap'

function App() {

  return (
    <>
      <div className='App'>
      <ToastContainer theme='colored'></ToastContainer>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Game' element={<Game/>}></Route>
        <Route path='/Game over' element={<Gameover/>}></Route>
       </Routes>
       </BrowserRouter>
      </div>
     
      
    </>
  )
}

export default App
