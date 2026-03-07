import { Routes, Route } from 'react-router-dom'
import Landing from "./pages/Landing/Landing.tsx";
import "./styles/App.css";
import Login from "./pages/LogIn/LogIn.tsx";
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <>
        <Toaster position="top-center"/>
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </>
  )
}

export default App
