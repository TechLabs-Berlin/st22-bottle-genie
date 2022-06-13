import { Route, Routes } from "react-router-dom";
import './App.css';
import SignUp from './pages/Signup';

function App() {
  return (
    <div className='App'>
      <h1>Hello World!</h1>
      {/* <Routes> */}
        <Route path="/signup" element={<SignUp />}/>
      {/* </Routes> */}
    </div>
  );
}

export default App;
