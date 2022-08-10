import "./App.css";
import AuthProvider from "./contexts/AuthContext";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
