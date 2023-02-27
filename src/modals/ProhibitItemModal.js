import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { packDoc } from "../utilities/constants";
import { useModalContext } from "../contexts/ModalContext";

const ProhibitItemModal = ({ destination }) => {
  const { prohibitModalOpen, closeProhibitModal } = useModalContext();

  //   filter the descriptions
  const filteredItems = packDoc.filter((item) => item.type === "Prohibited");

  // sort the description by name
  const sortedItems = filteredItems.sort((a, b) =>
    a.item.localeCompare(b.item)
  );

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      closeProhibitModal();
    }
  };

  if (!prohibitModalOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Wrapper className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="close" onClick={closeProhibitModal}>
          <AiFillCloseCircle size="2.5rem" />
        </div>
        <h4>Prohibited Items</h4>
        <div className="prohibit-content">
          <p>
            The following items are prohibited from importing into {destination}
          </p>
          <ul>
            {sortedItems.map((item, index) => {
              return <li key={index}>{item.item}</li>;
            })}
          </ul>
        </div>
      </div>
    </Wrapper>,
    document.body
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    width: 90vw;
    height: 75vh;
    max-width: 750px;
    .close {
      text-align: right;
      padding: 0.5rem;
    }
    .prohibit-content {
      overflow-y: auto;
      .main-contents {
        p {
          font-weight: 400;
        }
      }
    }
  }
`;

export default ProhibitItemModal;
