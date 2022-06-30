// Import the React and ReactDOM libraries (dependencies)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
import {AuthProviderWrapper} from './context/auth'

// Create a react component
// Take the react component and show it on the screen
// Get the element by id="root" in the index.html file which is inside public folder
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <BrowserRouter>
//     <Router>
//       <React.StrictMode>
//         <div>Hello</div>
//         {/* <App /> */}
//       </React.StrictMode>
//     </Router>
//   // </BrowserRouter>
// );

ReactDOM.render(
   <Router>
    <AuthProviderWrapper>
      <App/>
    </AuthProviderWrapper>
  </Router>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
