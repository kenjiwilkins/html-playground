import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function Index() {
  useEffect(() => {
    document.title = "HTML Tags";
  }, []);
  return (
    <>
      <aside className="flex">
        <ul className="p-4 pr-6 w-48">
          <li>
            <Link to="/html-tags/anchor">{"<a> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/abbr">{"<abbr> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/progress">{"<progress> Tag"}</Link>
          </li>
        </ul>
        <Outlet />
      </aside>
    </>
  );
}

export default Index;
