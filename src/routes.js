import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import About from "./components/About"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="sobre" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}