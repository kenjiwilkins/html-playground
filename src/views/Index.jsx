import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import {TransitionButton} from "../components";
import { getCookie } from "../utils/cookies";
import { applyTransition } from "../utils/transitions";

function Index() {
  useEffect(() => {
    // Load transition type from cookie and apply
    const transitionType = getCookie("view-transition-type");
    if (transitionType) {
      applyTransition(transitionType);
    } else {
      // Set default transition
      applyTransition("fade");
    }
  }, []);

  return (
    <>
      <header className="border-b border-gray-400">
        <nav className="p-4">
          <ul className="flex justify-between">
            <li>
              <TransitionButton to="/" ariaLabel="Navigate to home page">Home</TransitionButton>
            </li>
            <li>
              <TransitionButton to="/html-tags" ariaLabel="Navigate to HTML tags examples">HTML Tags</TransitionButton>
            </li>
            <li>
              <TransitionButton to="/css-styles" ariaLabel="Navigate to CSS styles examples">CSS Styles</TransitionButton>
            </li>
            <li>
              <TransitionButton to="/js-scripts" ariaLabel="Navigate to JavaScript scripts examples">JS Scripts</TransitionButton>
            </li>
            <li>
              <TransitionButton to="/responsive-design" ariaLabel="Navigate to responsive design examples">Responsive Design</TransitionButton>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="p-4 mt-4 text-center">
        <address>&copy; 2025 Michael Kenji Wilkins</address>
      </footer>
    </>
  );
}

export default Index;
