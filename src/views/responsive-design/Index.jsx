import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function Index() {
  useEffect(() => {
    document.title = "Responsive Design";
  }, []);
  return (
    <>
      <aside className="flex">
        <ul className="p-4 pr-6 w-48">
          <li>
            <Link to="/responsive-design/image-map">{"image map"}</Link>
          </li>
        </ul>
        <Outlet />
      </aside>
    </>
  );
}

export default Index;
