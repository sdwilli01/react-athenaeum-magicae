import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout"
import Atrium from "./components/Atrium";
import Gallery from "./components/Gallery";
import NoMatch from "./components/NoMatch";
import School from "./components/School";
import Tome from "./components/Tome";
import Spell from "./components/Spell";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Atrium />} />
                    <Route path="/galleries/:galleryId" element={<Gallery />} />
                    <Route path="/schools/:schoolId/classes/:classId" element={<School />} />
                    <Route path="/schools/:schoolId/classes/:classId/levels/:levelId" element={<Tome />} />
                    <Route path="/spellDetails/:spellId" element={<Spell />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
