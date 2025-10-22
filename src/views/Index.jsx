import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {TransitionButton} from "../components";
import { getCookie } from "../utils/cookies";
import { applyTransition } from "../utils/transitions";

function Index() {
  const [swStatus, setSwStatus] = useState('checking');

  useEffect(() => {
    // Load transition type from cookie and apply
    const transitionType = getCookie("view-transition-type");
    if (transitionType) {
      applyTransition(transitionType);
    } else {
      // Set default transition
      applyTransition("fade");
    }

    // Check service worker status
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(() => {
        setSwStatus('active');
      }).catch(() => {
        setSwStatus('inactive');
      });
    } else {
      setSwStatus('unsupported');
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
              <TransitionButton to="/html-document" ariaLabel="Navigate to HTML document examples">HTML Document</TransitionButton>
            </li>
            <li>
              <TransitionButton to="/css-styles" ariaLabel="Navigate to CSS styles examples">CSS Styles</TransitionButton>
            </li>
            <li>
              <TransitionButton to="/web-api" ariaLabel="Navigate to Web API examples">Web API</TransitionButton>
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
      <footer className="p-4 mt-4 text-center border-t border-gray-300">
        <div className="flex justify-center items-center gap-4 mb-2">
          <address>&copy; 2025 Michael Kenji Wilkins</address>
          {swStatus === 'active' && (
            <span className="text-xs text-green-600 flex items-center gap-1" title="Service Worker active - offline support enabled">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Offline Ready
            </span>
          )}
        </div>
      </footer>
    </>
  );
}

export default Index;
