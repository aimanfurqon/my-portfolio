// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import WorkExperience from "./pages/WorkExperience";

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-white border-b">
          <div className="container mx-auto p-5 flex justify-between">
            <a href="/" className="text-lg font-bold">
              AimanPortfolio
            </a>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-gray-700 hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/work-experience"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Work Experience
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work-experience" element={<WorkExperience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
