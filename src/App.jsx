import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home1 from "./pages/Home1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
