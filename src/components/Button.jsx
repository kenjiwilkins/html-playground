import classNames from "classnames";

function Button({ children, disabled, onClick }) {
  return (
    <button
      className={classNames(
        "p-2 text-white rounded active:bg-blue-700",
        disabled ? "bg-gray-300" : "bg-blue-600"
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
