import { useState } from "react";
import Modal from "./modal";
import "./modal.css";
export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          onClose={onClose}
          header={<h1>Customize Header</h1>}
          body={<div>Customized body </div>}
          footer={<h1>Customize Footer</h1>}
        />
      )}
    </div>
  );
}
