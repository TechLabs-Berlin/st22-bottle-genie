import { Route, Routes } from "react-router-dom";
import "./App.css";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Homepage from "./pages/Homepage";
// import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/signup' element={<Signup />} />
       </Routes>
    </div>
  );
}

export default App;
