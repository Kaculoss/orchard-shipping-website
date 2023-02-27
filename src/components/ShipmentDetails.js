import React from "react";
import styled from "styled-components";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { GoCheck } from "react-icons/go";
import { FiPackage } from "react-icons/fi";
import { DocOrPackModal, ProhibitItemModal, ShipProtectModal } from "../modals";
import { useModalContext } from "../contexts/ModalContext";
import { useAddressContext } from "../contexts/AddressContext";
import { useShipDetailContext } from "../contexts/ShipDetailContext";
import DocumentOption from "./DocumentOption";
import PackageOption from "./PackageOption";

const ShipmentDetails = () => {
  const { openProhibitModal, openDocPackModal } = useModalContext();
  const { fromAddress, toAddress } = useAddressContext();
  const { overallShipmentType, setShipTypeToDoc, setShipTypeToPack } =
    useShipDetailContext();

  return (
    <Wrapper>
      <ShipProtectModal />
      <ProhibitItemModal destination={toAddress?.country} />
      <DocOrPackModal
        destination={toAddress?.country}
        origin={fromAddress?.country}
      />
      <div className="titles">
        <h4>Shipment Details</h4>
        <p>What are you shipping?</p>
      </div>
      <div className="main-area">
        <div className="main-area-content">
          <div className="btn-checker">
            <div className="btn-checker-btn">
              <button
                type="button"
                className={overallShipmentType === "doc" ? "btn-checkbox" : ""}
                onClick={setShipTypeToDoc}
              >
                <span>
                  <HiOutlineDocumentDuplicate /> Documents
                </span>
                {overallShipmentType === "doc" && (
                  <GoCheck size="1.5rem" color="hsl(125, 67%, 44%)" />
                )}
              </button>
              <p>
                Documents include legal, financial or business paperwork. Items
                with monetary value are NOT considered a document shipment.
              </p>
            </div>
            <div className="btn-checker-btn">
              <button
                type="button"
                className={overallShipmentType === "pack" ? "btn-checkbox" : ""}
                onClick={setShipTypeToPack}
              >
                <span>
                  <FiPackage /> Packages
                </span>
                {overallShipmentType === "pack" && (
                  <GoCheck size="1.5rem" color="hsl(125, 67%, 44%)" />
                )}
              </button>
              <p>
                Packages are goods, merchandise or commodities for personal or
                commercial purposes.
              </p>
            </div>
          </div>
          <>{overallShipmentType === "doc" && <DocumentOption />}</>
          {overallShipmentType === "pack" && <PackageOption />}
        </div>
        <div className="main-area-side">
          {overallShipmentType === "pack" || (
            <div className="doc-pack">
              <div className="doc-pack-quest">
                <h5>Is it a document?</h5>
                <p>
                  Some items you might think are documents are not - Check
                  before completing your shipment
                </p>
              </div>
              <div className="doc-pack-sol">
                &gt;{" "}
                <span
                  style={{ color: "#1d4ed8", cursor: "pointer" }}
                  onClick={openDocPackModal}
                >
                  Help me determine if my item is a document.
                </span>
              </div>
            </div>
          )}
          <div className="prohibit">
            <h5>Prohibited Items</h5>
            <p>
              Some items that are prohibited when shipping to Ghana.{" "}
              <span
                style={{ color: "#1d4ed8", cursor: "pointer" }}
                onClick={openProhibitModal}
              >
                View Prohibited Items
              </span>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .titles {
    h4 {
      margin-bottom: 0;
    }
  }
  .main-area {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column-reverse;
    gap: 2rem;
    .main-area-content {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-start;
      gap: 2rem;
      .btn-checker {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 0.8rem;
        .btn-checker-btn {
          flex: 1;
          p {
            font-size: 0.7rem;
            margin-bottom: 0;
            /* color: var(--clr-grey-4); */
            font-weight: 400;
          }
          button {
            width: 100%;
            border: 1.5px solid var(--clr-grey-3);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.3rem 0.5rem;
            color: var(--clr-grey-3);
            font-weight: 700;
            transition: var(--transition);
          }
          .btn-checkbox {
            background-color: var(--clr-grey-3);
            color: var(--clr-grey-10);
          }
        }
      }
    }
    .main-area-side {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-start;
      gap: 0.8rem;
      h5 {
        margin-bottom: 0;
      }
      .doc-pack-quest p {
        margin-bottom: 1rem;
      }
      p {
        font-weight: 400;
      }
      .doc-pack,
      .prohibit {
        padding: 0.5rem;
        border: 1px solid var(--clr-grey-6);
      }
    }
  }
  @media screen and (min-width: 992px) {
    .main-area {
      flex-direction: row;
      gap: 1rem;
      .main-area-side {
        flex-direction: column;
        gap: 1.5rem;
      }
    }
  }
`;

export default ShipmentDetails;
