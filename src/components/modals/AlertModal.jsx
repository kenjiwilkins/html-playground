import PropTypes from "prop-types";
import { Button } from "../Button";

export function AlertModal({ title, message, confirmButtonText, onClose }) {
  return (
    <dialog
      open
      className="fixed inset-0 z-10 min-w-80 border-none rounded-md shadow-lg"
    >
      <div className="flex justify-center items-center p-2 relative">
        <h2 className="text-xl">{title}</h2>
        <button
          className="absolute right-0 top-0 bg-transparent"
          onClick={onClose}
        >
          X
        </button>
      </div>
      <div className="p-2 flex flex-col items-center justify-center gap-2">
        <p>{message}</p>
        <Button onClick={onClose}>{confirmButtonText}</Button>
      </div>
    </dialog>
  );
}

AlertModal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  confirmButtonText: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
