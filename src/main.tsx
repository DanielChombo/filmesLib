import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.tsx'
import Movie from './Pages/Movie.tsx'
import Seacrh from './Pages/Search.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element ={<App/>}>
          <Route path ="/" element={<Home />} />
          <Route path ="movie/:id" element={<Movie />} />  
          <Route path ="search" element={<Seacrh />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
