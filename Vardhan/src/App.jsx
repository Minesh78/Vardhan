import React,{useState, useEffect} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Layout from "./Pages/Layout"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Projects from "./Pages/Projects"
import Loader from "./Components/Loader"
import Studiowork from "./Pages/Studiowork"
function App() {
  
  const[loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=> setLoading(false),3000)
  },[])

  return (
    <>
    {
      loading ? <Loader />: <></>

    }

  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/studiowork" element={<Studiowork />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
    
     
    </>
  )
}

export default App
