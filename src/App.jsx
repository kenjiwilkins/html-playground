import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from "./views/Index";
import DynamicFavicon from "./views/DynamicFavicon";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index count={count} setCount={setCount} />} />
        <Route path="/dynamic-favicon" element={<DynamicFavicon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
