import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function Index() {
  useEffect(() => {
    document.title = "HTML Tags";
  }, []);
  return (
    <>
      <div className="flex">
        <ul className="p-4 pr-6 w-48">
          <li>
            <Link to="/html-tags/progress">{"<progress> Tag"}</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}

export default Index;
