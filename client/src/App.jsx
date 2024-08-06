import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/home.pages'
import Logue from "./pages/login.form";
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Logue/>}/>
  <Route path="" element= {<Home/> }/>
</Routes>
</BrowserRouter>
  )
}

export default App
