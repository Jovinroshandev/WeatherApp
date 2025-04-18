import Home from "./pages/home"
import ViewByLoc from "./pages/viewbycity"
import { Route, BrowserRouter, Routes } from "react-router-dom"
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/viewbyloc" element={<ViewByLoc/>}/>
      </Routes>
    </BrowserRouter>
  )
}