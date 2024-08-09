import { useEffect } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import { Link } from "react-router-dom";

function Index({ count, setCount }) {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <ul>
        <li>
          <Link to="/dynamic-favicon">Dynamic Favicon</Link>
        </li>
      </ul>
    </>
  );
}

export default Index;
