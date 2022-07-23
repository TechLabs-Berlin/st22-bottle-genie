import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './pages/SignUp/Signup';
import LogIn from './pages/LogIn/LogIn';
import Search from './pages/Search/Search';
import Wiki from './pages/Wiki/Wiki';
import HomePage from './pages/HomePage/HomePage';
import ResultPage from './pages/ResultPage/ResultPage';
import ScanPage from './pages/ScanPage/ScanPage';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/search" element={<ProtectedRoute redirectTo='/login'><Search /></ProtectedRoute>} />
				<Route path="/wiki" element={<ProtectedRoute redirectTo='/login'><Wiki /></ProtectedRoute>} />
				<Route path="/" element={<ProtectedRoute redirectTo='/login'><HomePage /></ProtectedRoute>} />
				<Route path="/result" element={<ProtectedRoute redirectTo='/login'><ResultPage /></ProtectedRoute>} />
				<Route path="/scan" element={<ProtectedRoute redirectTo='/login'><ScanPage /></ProtectedRoute>} />
			</Routes>
		</div>
	);
}

export default App;
