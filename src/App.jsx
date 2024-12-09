import {useEffect, useState} from 'react'
import './App.css'
import Bento from "./Bento.jsx";
import Cafe from "./Cafe.jsx";
import {data} from "./data.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {


  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/0' element={<Bento/>}/>
        <Route path='/1' element={<Cafe/>}/>

      </Routes>

    </BrowserRouter>


  </div>
}

export default App
