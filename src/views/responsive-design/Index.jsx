import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { TransitionButton } from "../../components";

function Index() {
  useEffect(() => {
    document.title = "Responsive Design";
  }, []);
  return (
    <>
      <aside className="flex">
        <ul className="p-4 pr-6 w-48">
          <li>
            <TransitionButton to="/responsive-design/image-map" ariaLabel={"Transition to image map page"}>{"image map"}</TransitionButton>
          </li>
        </ul>
        <Outlet />
      </aside>
    </>
  );
}

export default Index;
