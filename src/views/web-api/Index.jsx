import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { TransitionButton } from "../../components";

function Index() {
  useEffect(() => {
    document.title = "Web APIs";
  }, []);
  return (
    <>
      <div className="flex">
        <ul className="p-4 pr-6 w-48">
          <li>
            <TransitionButton to="/web-api/view-transition" ariaLabel="View transition API example">View Transition API</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/web-api/network-information" ariaLabel="Network Information API example">Network Information API</TransitionButton>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}

export default Index;
