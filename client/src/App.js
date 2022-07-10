import { Route, Routes } from 'react-router-dom';
// import ProtectedRoute from "./components/ProtectedRoute";
import Signup from './pages/Signup';
import LogIn from './pages/LogIn';
import Pass from './components/Pass';
import Search from './pages/Search';
import Wiki from './pages/Wiki';
import Homepage from './pages/Homepage';

function App() {
	return (
		<div className="App">
			<Routes>
				{/* <Route path='/' element={<Homepage />} /> */}
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/pass" element={<Pass />} />
				<Route path="/search" element={<Search />} />
				<Route path="/wiki" element={<Wiki />} />
				<Route path="/homepage" element={<Homepage />} />
			</Routes>
		</div>
	);
}

export default App;
