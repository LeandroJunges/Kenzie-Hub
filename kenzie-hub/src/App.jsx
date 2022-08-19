import "./App.css";
import AuthProvider from "./contexts/AuthContext";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import TechProvider from "./contexts/TechContext";
import RegisterProvider from "./contexts/RegisterContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RegisterProvider>
          <TechProvider>
            <Routes />
          </TechProvider>
        </RegisterProvider>
      </AuthProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
