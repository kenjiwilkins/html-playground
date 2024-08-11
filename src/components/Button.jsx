import classNames from "classnames";
import PropTypes from "prop-types";

function Button({ children, disabled, onClick }) {
  return (
    <button
      className={classNames(
        "p-2 text-white rounded active:bg-blue-700",
        disabled ? "bg-gray-300" : "bg-blue-600"
      )}
      disabled={disabled}
      onClick={() => {
        if (onClick && !disabled) {
          onClick();
        }
      }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
