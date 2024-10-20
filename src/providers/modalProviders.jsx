import { createContext, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { AlertModal } from "../components/modals";

export const ModalContext = createContext(null);
// const ModalList = {
//   alert: AlertModal,
// };

function Modal({ ...props }) {
  return <AlertModal {...props} />;
}

export function ModalProvider({ children }) {
  const [currentModal, setCurrentModal] = useState(null);

  const app = document.getElementById("root");
  return (
    <ModalContext.Provider value={setCurrentModal}>
      {children}
      {currentModal && createPortal(<Modal {...currentModal} />, app)}
    </ModalContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
