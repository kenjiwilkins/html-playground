import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { TransitionButton } from "../../components";

function Index() {
  useEffect(() => {
    document.title = "HTML Document";
  }, []);
  return (
    <>
      <div className="flex">
        <ul className="p-4 pr-6 w-48">
          <li>
            <TransitionButton to="/html-document/dynamic-favicon" ariaLabel="View dynamic favicon example">Dynamic Favicon</TransitionButton>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}

export default Index;
