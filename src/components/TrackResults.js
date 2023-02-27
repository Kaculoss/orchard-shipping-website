import React, { useState, useEffect } from "react";
import Barcode from "react-barcode";
import styled from "styled-components";
import { trackInfo } from "../utilities/constants";
import ShipmentItem from "./ShipmentItem";
import TrackAddress from "./TrackAddress";

const add = trackInfo[0].address;
const hist = trackInfo[0].history[0];
const info = trackInfo[0].shipmentInfo;

const TrackResults = () => {
  const [shipperAdd, setShipperAdd] = useState({});
  const [receiverAdd, setReceiverAdd] = useState({});
  const [history, setHistory] = useState([]);
  const [shipInfo, setShipInfo] = useState({});

  useEffect(() => {
    setShipperAdd(add.shipper);
    setReceiverAdd(add.receiver);
    setHistory(hist);
    setShipInfo(info);
  }, []);

  return (
    <Wrapper>
      <button className="btn" type="button">
        Print Invoice
      </button>
      <div className="invoice">
        <Barcode
          className="barcode"
          width={1.5}
          height={80}
          value="WPC01234567891011-CARGO"
        />
        {shipperAdd !== {} && (
          <div className="track-address">
            <TrackAddress
              type="shipper"
              address={shipperAdd.address}
              name={shipperAdd.name}
              number={shipperAdd.number}
              email={shipperAdd.email}
            />
            <TrackAddress
              type="receiver"
              address={receiverAdd.address}
              name={receiverAdd.name}
              number={receiverAdd.number}
              email={receiverAdd.email}
            />
          </div>
        )}
        <div className="shipment-status">
          <p>shipment status: {history.status}</p>
        </div>
        <div className="shipment-info">
          <div className="title">
            <h5>Shipment Information</h5>
          </div>
          <div className="shipment-items">
            <ShipmentItem
              head="type of shipment"
              value={shipInfo.shipmentType}
            />
            <ShipmentItem head="courier" value={shipInfo.courier} />
            <ShipmentItem head="mode" value={shipInfo.mode} />
            <ShipmentItem head="payment mode" value={shipInfo.paymentMode} />
            <ShipmentItem head="total freight" value={shipInfo.totalFreight} />
            <ShipmentItem head="carrier" value={shipInfo.carrier} />{" "}
            <ShipmentItem
              head="carrier reference no."
              value={shipInfo.carrierRefernceNo}
            />
            <ShipmentItem
              head="Departure time"
              value={shipInfo.departureTime}
            />
            <ShipmentItem head="origin" value={shipInfo.origin} />
            <ShipmentItem head="destination" value={shipInfo.destination} />
            <ShipmentItem head="pickup date" value={shipInfo.pickupDate} />
            <ShipmentItem head="pickup time" value={shipInfo.pickupTime} />
            <ShipmentItem
              head="expected delivery date"
              value={shipInfo.expectedDeliveryDate}
            />
            <ShipmentItem head="comment" value={shipInfo.comment} />
          </div>
        </div>
        <div className="packages">
          <div className="title">
            <h5>Packages</h5>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-grey-10);
  .btn {
    margin-top: 1rem;
    align-self: flex-end;
    margin-left: 1rem;
    margin-bottom: 1rem;
    text-transform: capitalize;
    padding: 0.8rem 1rem;
    font-size: 1rem;
  }
  .invoice {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .title {
      margin-bottom: 1.5rem;
      border-bottom: 1px solid var(--clr-grey-2);
      text-align: left;
      padding-left: 1rem;
      padding-right: 1rem;
      h5 {
        font-size: 1.3rem;
        margin-bottom: 0;
      }
    }
    .track-address {
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 1rem;
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .shipment-status {
      margin-top: 1rem;
      margin-bottom: 1.5rem;
      padding: 0.5rem 1rem;
      background-color: var(--clr-primary-6);
      width: 95vw;
      text-align: center;
      p {
        color: var(--clr-white);
        margin-bottom: 0;
        text-transform: uppercase;
      }
    }
    .shipment-info {
      width: 95vw;
      margin-bottom: 2rem;
      .shipment-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
      }
    }
    .packages {
      width: 95vw;
    }
  }
  @media screen and (min-width: 992px) {
    .invoice .shipment-status,
    .invoice .shipment-info,
    .invoice .packages {
      width: 100%;
    }
    .shipment-items {
      padding: 0 2rem;
      gap: 2rem;
    }
  }
`;

export default TrackResults;
