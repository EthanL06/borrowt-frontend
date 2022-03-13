import { Routes, Route } from "react-router-dom";
import { ModalContextProvider } from "./contexts/ModalContextProvider";
import { AuthenticationContextProvider } from "./contexts/AuthenticationContextProvider";

import { Navbar } from "./components/Navbar";
import { Browse } from "./pages/Browse";

function App() {
  return (
    <>
      <AuthenticationContextProvider>
        <ModalContextProvider>
          <Navbar />
          {/* <Routes>
          <Route path="/" element={<Browse />} />
        </Routes> */}
          <Browse />
        </ModalContextProvider>
      </AuthenticationContextProvider>
    </>
  );
}

export default App;
