import { createContext, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { AlertModal } from "../components/modals";

export const ModalContext = createContext(null);

function Modal({ ...props }) {
  const ModalList = {
    alert: AlertModal,
  };

  const Component = ModalList[props.type];
  if (!Component) {
    console.error(`Modal type ${props.type} is not supported`);
    return null;
  }

  return <Component {...props} />;
}

Modal.propTypes = {
  type: PropTypes.string.isRequired,
};

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
