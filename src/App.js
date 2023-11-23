import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blog from './pages/Blog/Blog.js'
import DefaultColorPage from './pages/color/DefaultColorPage.js';

function App() {
  // axios.defaults.withCredentials = true;

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/">
            <Route path={"/Blog"} index element={<Blog />} />
            <Route path={"/"} index element={<DefaultColorPage />} />
            {//<Route path="*" element={<NoPage />} />
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;