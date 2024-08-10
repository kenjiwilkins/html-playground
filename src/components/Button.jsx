function Button({ children, disabled, onClick }) {
  return (
    <button
      className={`p-2 text-white ${
        disabled ? "bg-gray-300" : "bg-blue-600"
      } rounded active:bg-blue-700`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
