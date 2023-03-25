import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "../../components/header"
import Home from "../Home"

const AppRouter = () => {
  return (
<BrowserRouter>
<Header />
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
</BrowserRouter>
    )
}

export default AppRouter