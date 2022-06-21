// import { CssBaseline } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";

// https://mui.com/customization/theming/
// https://mui.com/customization/palette/
// https://material-foundation.github.io/material-theme-builder/#/custom
// const theme = createTheme({
//     palette: {
//         primary: {
//             main: "#006494",
//         },
//         secondary: {
//             main: "#4f606e",
//         },
//         error: {
//             main: "#ba1b1b",
//         },
//         warning: {
//             main: "#4f606e",
//         },
//         info: {
//             main: "#4f606e",
//         },
//         success: {
//             main: "#4f606e",
//         },
//     },
// });

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Route
          path='/'
          element={
            <ProtectedRoute redirectTo='/login'>
              <Homepage />
            </ProtectedRoute>
          }
        /> */}

        <Route path='/signup' element={<Signup />} />
        {/* <Route path='/login' element={<Login />} /> */}
       </BrowserRouter>
    </div>
  );
}

export default App;
