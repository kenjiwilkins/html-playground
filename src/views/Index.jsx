import { Link, Outlet } from "react-router-dom";

function Index() {
  return (
    <>
      <header className="border-b border-gray-400">
        <nav className="p-4">
          <ul className="flex justify-between">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/html-tags">HTML Tags</Link>
            </li>
            <li>
              <Link to="/css-styles">CSS Styles</Link>
            </li>
            <li>
              <Link to="/js-scripts">JS Scripts</Link>
            </li>
            <li>
              <Link to="/responsive-design">Responsive Design</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Index;
