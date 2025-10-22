import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export function TransitionButton({ to, children, className, ariaLabel }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === to;

  const handleClick = (e) => {
    // Allow default browser behavior for modifier keys
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) {
      return;
    }

    e.preventDefault();

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(to);
      });
    } else {
      navigate(to);
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </a>
  );
}

TransitionButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};
