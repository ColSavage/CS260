import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Bobs from "./pages/Bobs";
import Simpsons from "./pages/Simpsons";
import githubPic from "./images/GitHub-Mark-32px.png";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="bobs" element={<Bobs />} />
            <Route path="simpsons" element={<Simpsons />} />
            <Route path="*" element={<Navigate to="/" />}  />
          </Route>
        </Routes>
      </BrowserRouter>
      <div id='footer'>
        <p id='footer-note'>Check out my <a href='https://github.com/ColSavage/CS260'>Github</a></p>
        <a href="https://github.com/ColSavage/CS260"><img src={githubPic}/></a>
      </div>
    </>
  );
}
