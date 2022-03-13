import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Browse } from "./pages/Browse";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Browse />} />
      </Routes>
    </>
  );
}

export default App;
