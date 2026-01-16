import { Routes, Route } from 'react-router-dom'
import Landing from "./pages/Landing/Landing.tsx";
import "./styles/App.css";
import Login from "./pages/LogIn/LogIn.tsx";
import Core from "./pages/Core/Core.tsx";

function App() {
  return (
    <>
        <>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/app" element={<Core/>}/>
            </Routes>
        </>
    </>
  )
}

export default App
