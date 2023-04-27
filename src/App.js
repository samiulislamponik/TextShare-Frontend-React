import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import TextView from "./components/TextView";
import UpdateText from "./components/UpdateText";
import NotFound from "./components/NotFound";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/t/:url" element={<TextView />} />
                <Route path="/t/:url/edit" element={<UpdateText />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
