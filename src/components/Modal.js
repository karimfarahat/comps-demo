import { useEffect } from "react";
import ReactDOM from "react-dom";
function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    //can be used to add a class
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  //to place the HTML for the modal in the manually-typed "modal-container" div
  // in the index.html, to have no parent but the body. (to ensure modal position)
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">{children}</div>
        <div className="flex justify-end">{actionBar}</div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
