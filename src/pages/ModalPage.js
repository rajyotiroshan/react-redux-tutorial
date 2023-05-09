import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  const handleClick = () => {
    setShowModal(!showModal);
  };
  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement you need to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        mollis, leo id lacinia tincidunt, lorem lectus gravida massa, vitae
        posuere magna lectus vitae nisl. Suspendisse potenti. Nam elit enim,
        sodales eu dignissim non, tincidunt vel lacus. Nulla facilisi.
        Vestibulum tempor consectetur commodo. Aliquam volutpat diam nec
        elementum consequat. Cras pharetra est ac dolor iaculis, non
        sollicitudin felis molestie.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        mollis, leo id lacinia tincidunt, lorem lectus gravida massa, vitae
        posuere magna lectus vitae nisl. Suspendisse potenti. Nam elit enim,
        sodales eu dignissim non, tincidunt vel lacus. Nulla facilisi.
        Vestibulum tempor consectetur commodo. Aliquam volutpat diam nec
        elementum consequat. Cras pharetra est ac dolor iaculis, non
        sollicitudin felis molestie.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        mollis, leo id lacinia tincidunt, lorem lectus gravida massa, vitae
        posuere magna lectus vitae nisl. Suspendisse potenti. Nam elit enim,
        sodales eu dignissim non, tincidunt vel lacus. Nulla facilisi.
        Vestibulum tempor consectetur commodo. Aliquam volutpat diam nec
        elementum consequat. Cras pharetra est ac dolor iaculis, non
        sollicitudin felis molestie.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        mollis, leo id lacinia tincidunt, lorem lectus gravida massa, vitae
        posuere magna lectus vitae nisl. Suspendisse potenti. Nam elit enim,
        sodales eu dignissim non, tincidunt vel lacus. Nulla facilisi.
        Vestibulum tempor consectetur commodo. Aliquam volutpat diam nec
        elementum consequat. Cras pharetra est ac dolor iaculis, non
        sollicitudin felis molestie.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        mollis, leo id lacinia tincidunt, lorem lectus gravida massa, vitae
        posuere magna lectus vitae nisl. Suspendisse potenti. Nam elit enim,
        sodales eu dignissim non, tincidunt vel lacus. Nulla facilisi.
        Vestibulum tempor consectetur commodo. Aliquam volutpat diam nec
        elementum consequat. Cras pharetra est ac dolor iaculis, non
        sollicitudin felis molestie.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        mollis, leo id lacinia tincidunt, lorem lectus gravida massa, vitae
        posuere magna lectus vitae nisl. Suspendisse potenti. Nam elit enim,
        sodales eu dignissim non, tincidunt vel lacus. Nulla facilisi.
        Vestibulum tempor consectetur commodo. Aliquam volutpat diam nec
        elementum consequat. Cras pharetra est ac dolor iaculis, non
        sollicitudin felis molestie.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        mollis, leo id lacinia tincidunt, lorem lectus gravida massa, vitae
        posuere magna lectus vitae nisl. Suspendisse potenti. Nam elit enim,
        sodales eu dignissim non, tincidunt vel lacus. Nulla facilisi.
        Vestibulum tempor consectetur commodo. Aliquam volutpat diam nec
        elementum consequat. Cras pharetra est ac dolor iaculis, non
        sollicitudin felis molestie.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        mollis, leo id lacinia tincidunt, lorem lectus gravida massa, vitae
        posuere magna lectus vitae nisl. Suspendisse potenti. Nam elit enim,
        sodales eu dignissim non, tincidunt vel lacus. Nulla facilisi.
        Vestibulum tempor consectetur commodo. Aliquam volutpat diam nec
        elementum consequat. Cras pharetra est ac dolor iaculis, non
        sollicitudin felis molestie.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        mollis, leo id lacinia tincidunt, lorem lectus gravida massa, vitae
        posuere magna lectus vitae nisl. Suspendisse potenti. Nam elit enim,
        sodales eu dignissim non, tincidunt vel lacus. Nulla facilisi.
        Vestibulum tempor consectetur commodo. Aliquam volutpat diam nec
        elementum consequat. Cras pharetra est ac dolor iaculis, non
        sollicitudin felis molestie.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        mollis, leo id lacinia tincidunt, lorem lectus gravida massa, vitae
        posuere magna lectus vitae nisl. Suspendisse potenti. Nam elit enim,
        sodales eu dignissim non, tincidunt vel lacus. Nulla facilisi.
        Vestibulum tempor consectetur commodo. Aliquam volutpat diam nec
        elementum consequat. Cras pharetra est ac dolor iaculis, non
        sollicitudin felis molestie.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        mollis, leo id lacinia tincidunt, lorem lectus gravida massa, vitae
        posuere magna lectus vitae nisl. Suspendisse potenti. Nam elit enim,
        sodales eu dignissim non, tincidunt vel lacus. Nulla facilisi.
        Vestibulum tempor consectetur commodo. Aliquam volutpat diam nec
        elementum consequat. Cras pharetra est ac dolor iaculis, non
        sollicitudin felis molestie.
      </p>
    </div>
  );
}
