import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from './pages/SignUp/Signup';
import LogIn from './pages/LogIn/LogIn';
import Pass from './components/Pass';
import Search from './pages/Search/Search';
import Wiki from './pages/Wiki/Wiki';
import Homepage from './pages/Homepage/Homepage';
import Mappage from './pages/Map/Mappage';
import Scanpage from './pages/Scan/Scanpage';

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
				<Route path="/" element={<Homepage />} />
				<Route path="/map" element={<Mappage />} />
				<Route path="/scan" element={<Scanpage />} />
				{/* <Route path="/search" element={<ProtectedRoute redirectTo='/login'><Search /></ProtectedRoute>} />
                <Route path="/wiki" element={<ProtectedRoute redirectTo='/login'><Wiki /></ProtectedRoute>} />
                <Route path="/" element={<ProtectedRoute redirectTo='/login'><Homepage /></ProtectedRoute>} />
                <Route path="/map" element={<ProtectedRoute redirectTo='/login'><Mappage /></ProtectedRoute>} /> */}
			</Routes>
		</div>
	);
}

export default App;
