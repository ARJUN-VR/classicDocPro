import { BrowserRouter ,Routes,Route } from "react-router-dom"
import './App.css'
import LandingPage from "./pages/LandingPage"
import Home from "./pages/Home"
import { Draft } from "./components/Draft"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/draft" element={<Draft />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
