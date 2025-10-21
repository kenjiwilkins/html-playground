import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { TransitionButton } from "../../components";

function Index() {
  useEffect(() => {
    document.title = "JS Scripts";
  }, []);
  return (
    <>
      <div className="flex">
        <ul className="p-4 pr-6 w-48">
          <li>
            <TransitionButton to="/js-scripts/dynamic-favicon" ariaLabel="View dynamic favicon example">Dynamic Favicon</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/js-scripts/view-transition" ariaLabel="View transition API example">View Transition API</TransitionButton>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}

export default Index;
