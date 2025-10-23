import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import {TransitionButton} from "../../components";

function Index() {
  useEffect(() => {
    document.title = "CSS Styles";
  }, []);
  return (
    <div className="flex">
      <aside className="flex min-w-fit">
        <ul className="p-4 pr-6 w-48">
          <li>
            <TransitionButton to="/css-styles/active" ariaLabel="View :active pseudo-class example">:active</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/css-styles/any-link" ariaLabel="View :any-link pseudo-class example">:any-link</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/css-styles/autofill" ariaLabel="View :autofill pseudo-class example">:autofill</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/css-styles/checked" ariaLabel="View :checked pseudo-class example">:checked</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/css-styles/default" ariaLabel="View :default pseudo-class example">:default</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/css-styles/dir" ariaLabel="View :dir() pseudo-class example">:{"dir()"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/css-styles/target" ariaLabel="View :target pseudo-class example">:target</TransitionButton>
          </li>
        </ul>
      </aside>
      <Outlet />
    </div>
  );
}

export default Index;