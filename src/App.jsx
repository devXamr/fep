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
        <Route path='/bento' element={<Bento/>}/>
        <Route path='/cafe' element={<Cafe/>}/>

      </Routes>

    </BrowserRouter>


  </div>
}

export default App
