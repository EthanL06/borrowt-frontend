
import { ModalContextProvider } from "./contexts/ModalContextProvider";
import { AuthenticationContextProvider } from "./contexts/AuthenticationContextProvider";
import { AllRoutes } from "./pages/AllRoutes";

function App() {
  return (
    <>
      <AuthenticationContextProvider>
        <ModalContextProvider>
          <AllRoutes />
        </ModalContextProvider>
      </AuthenticationContextProvider>
    </>
  );
}

export default App;
