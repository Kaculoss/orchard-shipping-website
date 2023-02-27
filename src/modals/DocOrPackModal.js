import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { packDoc } from "../utilities/constants";
import { useModalContext } from "../contexts/ModalContext";
import { useShipDetailContext } from "../contexts/ShipDetailContext";

const DocOrPackModal = ({ origin, destination }) => {
  const { docPackModalOpen, closeDocPackModal } = useModalContext();
  const { setShipTypeToDoc, setShipTypeToPack } = useShipDetailContext();

  const [selectedItems, setSelectedItems] = useState([]);
  const [results, setResults] = useState([]);
  const [overallShipType, setOverallShipType] = useState("");

  const handleItemSelect = (item) => {
    if (selectedItems.some((selected) => selected.item === item.item)) {
      setSelectedItems(
        selectedItems.filter((selected) => selected.item !== item.item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleResults = () => {
    if (overallShipType === "Package") {
      setShipTypeToPack();
      closeDocPackModal();
    }
    if (overallShipType === "Document") {
      setShipTypeToDoc();
      closeDocPackModal();
    }
  };

  const determineShipType = () => {
    const sortedResults = selectedItems.sort((a, b) =>
      a.item.localeCompare(b.item)
    );
    setResults(sortedResults);
  };

  const isOdd = (num) => num % 2 !== 0;

  useEffect(() => {
    if (results?.find((obj) => obj.type === "Prohibited")) {
      setOverallShipType("Prohibited");
    } else if (results?.find((obj) => obj.type === "Restricted")) {
      setOverallShipType("Restricted");
    } else if (results?.find((obj) => obj.type === "Package")) {
      setOverallShipType("Package");
    } else if (results?.find((obj) => obj.type === "Document")) {
      setOverallShipType("Document");
    }
  }, [results]);

  // sort the description by name
  const sortedItems = packDoc.sort((a, b) => a.item.localeCompare(b.item));

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      closeDocPackModal();
    }
  };

  if (!docPackModalOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Wrapper className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="close" onClick={closeDocPackModal}>
          <AiFillCloseCircle size="2.5rem" />
        </div>
        <h4>Document or Package</h4>
        <div className="doc-pack-content">
          <div className="inner-content">
            <p className="introduction">
              If you are unsure, we'll help you decide. Review Shipment Type and
              Remarks (if any) for each item as well as the Overall Shipment
              Type for your shipment.
            </p>
            <div className="row gap-30">
              <div className="col-4 mb-2">
                <div className="outer-box">
                  <h6>Select items applicable to your shipment</h6>
                  <div className="inner-box">
                    <ul>
                      {sortedItems.map((item, index) => {
                        return (
                          <li
                            key={item.item}
                            onClick={() => handleItemSelect(item)}
                            style={{
                              backgroundColor: selectedItems.some(
                                (selected) => selected.item === item.item
                              )
                                ? "#1e3a8a"
                                : isOdd(index)
                                ? "#f2f2f2"
                                : "white",
                              color:
                                selectedItems.some(
                                  (selected) => selected.item === item.item
                                ) && "#eff6ff",
                              cursor: "pointer",
                            }}
                          >
                            <span style={{ marginRight: "10px" }}>
                              {selectedItems.some(
                                (selected) => selected.item === item.item
                              ) && <i className="fas fa-check"></i>}
                            </span>
                            {item.item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="row">
                    <div className="col-5 loc-titles">
                      <p>Origin</p>
                      <p>Destination</p>
                    </div>
                    <div className="col-7 loc-values">
                      <p>{origin}</p>
                      <p>{destination}</p>
                    </div>
                  </div>
                </div>
                {selectedItems.length > 0 && (
                  <div className="determine-btn">
                    <button
                      type="button"
                      className="btn"
                      onClick={determineShipType}
                    >
                      Determine Overall Shipment Type
                    </button>
                  </div>
                )}
              </div>
              <div className="col-7">
                {results.length > 0 ? (
                  <>
                    <div className="outer-box second-box">
                      <p>
                        Some Items may be either Document or Package. You will
                        need to refer to the remarks to properly select the
                        Shipment Type for the item which may change your Overall
                        Shipment Type.
                      </p>
                      <div className="result-box">
                        <div className="row head-row gap-10">
                          <div className="col-4">
                            <h6>Item</h6>
                          </div>
                          <div className="col-2">
                            <h6>Shipment Type</h6>
                          </div>
                          <div className="col-5">
                            <h6>Remarks</h6>
                          </div>
                        </div>
                        <div className="results">
                          {results.map((item, index) => {
                            return (
                              <div
                                className="row value-row gap-10"
                                style={{
                                  backgroundColor: isOdd(index)
                                    ? "#f2f2f2"
                                    : "white",
                                }}
                                key={item.item}
                              >
                                <div className="col-4">
                                  <p>{item.item}</p>
                                </div>
                                <div className="col-2">
                                  <p>{item.type}</p>
                                </div>
                                <div className="col-5">
                                  <p>{item.remark}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="final-results">
                        <h6>Overall Shipment Type: </h6>
                        <div
                          className={`shipment-type ${
                            overallShipType === "Prohibited" && "back-red"
                          } ${
                            overallShipType === "Restricted" && "back-lred"
                          } ${overallShipType === "Package" && "back-green"} ${
                            overallShipType === "Document" && "back-green"
                          }`}
                        >
                          <h5>{overallShipType}</h5>
                        </div>
                      </div>
                    </div>
                    <div className="continue-shipping">
                      {overallShipType === "Prohibited" ||
                      overallShipType === "Restricted" ? (
                        <p className="pro-rest-text">
                          Due to trade restrictions, service availability or
                          shipping regulations, one or more of the selected
                          items cannot be shipped or is restricted
                        </p>
                      ) : (
                        <button
                          type="button"
                          className="btn"
                          onClick={handleResults}
                        >
                          Continue Shipping with Shipment Type
                        </button>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="outer-box second-box">
                      <h6>
                        Please be sure to check all the items in your shipment.
                      </h6>
                      <p>
                        While items might be of a document nature, some may need
                        to be cleared through Customs and must be shipped as a
                        package.
                      </p>
                      <ul>
                        <li>
                          If any one item in your shipment is of a package type,
                          the whole shipment will be treated as a package.
                        </li>
                        <li>
                          If you need clarification on shipment type or any
                          remarks, please contact Customer Service.
                        </li>
                      </ul>
                    </div>
                  </>
                )}
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
  .introduction {
    font-weight: 400;
    margin-bottom: 0;
  }
  p,
  li {
    font-size: 0.9rem;
  }
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    width: 90vw;
    /* height: 85vh; */
    max-width: 1000px;
    .close {
      text-align: right;
      padding: 0.5rem;
    }
    .doc-pack-content {
      overflow-x: auto;
      .inner-content {
        width: 1150px;
        /* p {
          font-weight: 400;
        } */
        .row {
          margin-left: 0;
          margin-right: 0;
          .outer-box {
            padding: 0.5rem;
            border: 1px solid var(--clr-grey-4);
            background-color: var(--clr-grey-9);
            h6 {
              margin-bottom: 0;
            }
            .inner-box {
              height: 250px;
              border: 1px solid var(--clr-grey-1);
              overflow-y: auto;
              background-color: var(--clr-white);
              padding: 0 0.3rem;
              margin: 1rem 0.5rem;
              ul {
                padding-left: 0;
              }
            }
            .loc-values {
              p {
                font-weight: 400;
                margin-bottom: 0;
              }
            }
            .loc-titles {
              p {
                margin-bottom: 0;
              }
            }
          }
          .determine-btn {
            margin-top: 0.5rem;
            text-align: right;
            .btn {
              text-transform: capitalize;
            }
          }
          .continue-shipping {
            margin-top: 0.5rem;
            .pro-rest-text {
              font-size: 0.6rem;
              margin-bottom: 0;
              color: var(--clr-red-dark);
            }
            .btn {
              background-color: var(--clr-green-dark);
              text-transform: none;
              color: var(--clr-grey-10);
              &:hover {
                background-color: var(--clr-green-light);
              }
            }
          }
          .second-box {
            height: fit-content;
            p {
              margin-bottom: 0;
              font-weight: 400;
            }
            ul {
              list-style: square;
              padding-left: 2rem;
            }
            .result-box {
              height: 200px;
              overflow-y: auto;
              background-color: var(--clr-white);
              padding: 0 0.3rem;
              margin: 1rem 0.5rem;
              .value-row {
                padding: 0.3rem 0;
              }
            }
            .final-results {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              gap: 1rem;
              .shipment-type {
                border: 1px solid var(--clr-grey-6);
                color: var(--clr-grey-10);
                padding: 1rem;
                h5 {
                  margin-bottom: 0;
                }
              }
              .back-red {
                background-color: var(--clr-red-dark);
              }
              .back-lred {
                background-color: var(--clr-red-light);
              }
              .back-green {
                background-color: var(--clr-green-dark);
              }
            }
          }
        }
      }
    }
  }
`;

export default DocOrPackModal;
