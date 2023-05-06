import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && <Modal />}
    </div>
  );
}
