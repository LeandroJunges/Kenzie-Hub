import "./App.css";
import AuthProvider from "./contexts/AuthContext";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import TechProvider from "./contexts/TechContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <TechProvider>
          <Routes />
        </TechProvider>
      </AuthProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
