import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { useModalContext } from "../contexts/ModalContext";

const ShipProtectModal = () => {
  const { protectModalOpen, closeProtectModal } = useModalContext();

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      closeProtectModal();
    }
  };

  if (!protectModalOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Wrapper className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="close" onClick={closeProtectModal}>
          <AiFillCloseCircle size="2.5rem" />
        </div>
        <h4>Shipment Protection</h4>
        <div className="protection-content">
          <div className="main-contents">
            <div className="row">
              <div className="col-2">
                <p>Shipment Insurance</p>
              </div>
              <div className="col-6">
                <p>
                  We recommend this comprehensive protection for your valuable
                  or personal shipments, giving you peace of mind in the
                  unlikely event of physical damage or loss. Terms and
                  Conditions apply.
                </p>
              </div>
              <div className="col-2">
                <h6>How We Charge</h6>
                <p>By Shipment Value</p>
              </div>
              <div className="col-2">
                <h6>Cost</h6>
                <p>12.00 GBP or 1.5% of insured value if higher</p>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <p>Extended Liability</p>
              </div>
              <div className="col-6">
                <p>
                  If you are sending documents such as passports, visa
                  application or regulatory certificate, you can extend to
                  Orchard standard liability with this service.
                </p>
                <p>
                  In the event of full or partial loss to a document shipment, a
                  fixed compensation will be paid.
                </p>
              </div>
              <div className="col-2">
                <h6>How We Charge</h6>
                <p>Per Shipment</p>
              </div>
              <div className="col-2">
                <h6>Cost</h6>
                <p>12.00 GBP or 1.5% of insured value if higher</p>
              </div>
            </div>
          </div>
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
    max-width: 750px;
    .close {
      text-align: right;
      padding: 0.5rem;
    }
    .protection-content {
      overflow-x: auto;
      .main-contents {
        width: 1000px;
        p {
          font-weight: 400;
        }
      }
    }
  }
`;

export default ShipProtectModal;
