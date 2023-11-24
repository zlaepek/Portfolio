import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blog from './pages/blog/Blog.js'
import DefaultColorPage from './pages/color/DefaultColorPage.js';
import PageNotFoundPage from './pages/PageNotFoundPage.js';

function App() {
  // axios.defaults.withCredentials = true;

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/">
            <Route path="Colors">
              <Route path=":color" element={<DefaultColorPage />} />
            </Route>
            <Route path={"/Blog"} index element={<Blog />} />
            <Route path="*" element={<PageNotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;