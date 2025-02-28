import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function Index() {
  useEffect(() => {
    document.title = "CSS Styles";
  }, []);
  return (
    <div className="flex">
      <aside className="flex min-w-fit">
        <ul className="p-4 pr-6 w-48">
          <li>
            <Link to="/css-styles/active">:active</Link>
          </li>
          <li>
            <Link to="/css-styles/any-link">:any-link</Link>
          </li>
          <li>
            <Link to="/css-styles/autofill">:autofill</Link>
          </li>
          <li>
            <Link to="/css-styles/checked">:checked</Link>
          </li>
          <li>
            <Link to="/css-styles/default">:default</Link>
          </li>
        </ul>
      </aside>
      <Outlet />
    </div>
  );
}

export default Index;