import { Routes, Route } from "react-router-dom";
import './App.css';
import Atrium from './components/Atrium';
import Gallery from "./components/Gallery";
import NoMatch from "./components/NoMatch";
import School from "./components/School";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Atrium />} />
                <Route path="/galleries/:galleryId" element={<Gallery/>} />
                <Route path="/schools/:schoolId/classes/:classId" element={<School />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    );
}

export default App;
