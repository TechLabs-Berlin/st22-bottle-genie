import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from './pages/SignUp/Signup';
import LogIn from './pages/LogIn/LogIn';
import Pass from './components/Pass';
import Search from './pages/Search/Search';
import Wiki from './pages/Wiki/Wiki';
import HomePage from './pages/HomePage/HomePage';
import MapPage from './pages/Map/MapPage';
import ScanPage from './pages/ScanPage/ScanPage';

function App() {
	return (
		<div className="App">
			<Routes>
				{/* <Route path='/' element={<HomePage />} /> */}
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/pass" element={<Pass />} />
				<Route path="/search" element={<Search />} />
				<Route path="/wiki" element={<Wiki />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/map" element={<MapPage />} />
				<Route path="/scan" element={<ScanPage />} />
				{/* <Route path="/search" element={<ProtectedRoute redirectTo='/login'><Search /></ProtectedRoute>} />
                <Route path="/wiki" element={<ProtectedRoute redirectTo='/login'><Wiki /></ProtectedRoute>} />
                <Route path="/" element={<ProtectedRoute redirectTo='/login'><HomePage /></ProtectedRoute>} />
                <Route path="/map" element={<ProtectedRoute redirectTo='/login'><MapPage /></ProtectedRoute>} /> */}
			</Routes>
		</div>
	);
}

export default App;
