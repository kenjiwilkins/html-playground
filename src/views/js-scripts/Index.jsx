import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function Index() {
  useEffect(() => {
    document.title = "JS Scripts";
  }, []);
  return (
    <>
      <div className="flex">
        <ul className="p-4 pr-6 w-48">
          <li>
            <Link to="/js-scripts/dynamic-favicon">Dynamic Favicon</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}

export default Index;
