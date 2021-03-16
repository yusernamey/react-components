import { useRef } from "react";
import ModalComponent from "./ModalComponent";
import "./modal.css";

const Modal = () => {
  const modalRef = useRef();
  const openModal = () => {
    modalRef.current.openModal();
  };
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <ModalComponent ref={modalRef}>
        <h1>Modal Header</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          eligendi esse facere illo in minima nulla quis reiciendis. Eligendi
          impedit nostrum quam quod reprehenderit, ullam veritatis. Fuga
          provident quos velit. Accusantium ad, alias animi et eum, excepturi
          explicabo fuga iusto magnam maxime minima molestias nam nemo nostrum
          pariatur perspiciatis porro quae quibusdam quidem quis repudiandae sed
          ullam vel, veniam vero. Eligendi nulla quasi quibusdam quod saepe
          suscipit tenetur voluptas voluptate! Accusamus amet, commodi culpa
          distinctio dolor eveniet expedita hic iure magnam magni mollitia nulla
          officia quas, reiciendis repellat sapiente, veniam! Eligendi nulla
          quasi quibusdam quod saepe suscipit tenetur voluptas voluptate!
          Accusamus amet, commodi culpa distinctio dolor eveniet expedita hic
          iure magnam magni mollitia nulla officia quas, reiciendis repellat
          sapiente, veniam! Eligendi nulla quasi quibusdam quod saepe suscipit
          tenetur voluptas voluptate! Accusamus amet, commodi culpa distinctio
          dolor eveniet expedita hic iure magnam magni mollitia nulla officia
          quas, reiciendis repellat sapiente, veniam! Eligendi nulla quasi
          quibusdam quod saepe suscipit tenetur voluptas voluptate! Accusamus
        </p>
        <button onClick={() => modalRef.current.close()}>Close Modal</button>
      </ModalComponent>
    </div>
  );
};

export default {
  routeProps: {
    path: "/modal",
    component: Modal,
  },
  name: "Modal",
};
