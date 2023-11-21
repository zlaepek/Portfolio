import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blog from './pages/Blog.js'

function App() {
  // axios.defaults.withCredentials = true;

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/">
            <Route path={"/"} index element={<Blog />} />
            {//<Route path="*" element={<NoPage />} />
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;