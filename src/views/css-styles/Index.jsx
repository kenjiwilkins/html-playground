import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function Index() {
  useEffect(() => {
    document.title = "CSS Styles";
  }, []);
  return (
    <>
      <aside className="flex">
        <ul className="p-4 pr-6 w-48">
          <li>
            <Link to="/css-styles/active">:active</Link>
          </li>
        </ul>
      </aside>
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}

export default Index;