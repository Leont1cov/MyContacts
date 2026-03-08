import { Routes, Route } from 'react-router-dom'
import Landing from "./pages/Landing/Landing.tsx";
import "./styles/App.css";
import Login from "./pages/LogIn/LogIn.tsx";
import Core from "./pages/Core/Core.tsx";
import ProfilePublic from "./pages/Core/Profile/ProfilePublic/ProfilePublic.tsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
        <Toaster position="top-center" />
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/app" element={<Core/>}/>
            <Route path="/public/:userId" element={<ProfilePublic/>}/>
        </Routes>
    </>
  )
}

export default App
