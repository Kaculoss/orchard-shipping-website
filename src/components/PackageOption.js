import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import styled from "styled-components";
import { useShipDetailContext } from "../contexts/ShipDetailContext";
import { shipmentPurpose } from "../utilities/constants";
import FormRow from "./FormRow";

const PackageOption = () => {
  const { setPackShipPurpose, packageType } = useShipDetailContext();

  return (
    <Wrapper>
      <div className="first-info">
        <div>
          <div className="first-info-icon">
            <BsFillInfoCircleFill />
          </div>
        </div>
        <div className="first-info-info">
          <p>
            Shipment is subject to custom duties and taxes, payable by the
            reciever.
          </p>
        </div>
      </div>
      <div className="shipPurpose">
        <FormRow
          inputTag={false}
          selectTag={true}
          selectItems={shipmentPurpose.sort()}
          selectType="Type 3"
          name="shipPurpose"
          selectText="One"
          labelText="What is the purpose of your shipment?"
          value={packageType.shipPurpsose}
          handleChange={setPackShipPurpose}
          required
          specError={packageType.errors.shipPurpsose}
          overError={packageType.packageError}
          errorText={packageType.errorMsgs.shipPurpsose}
          warnLabel={true}
          warnLabelText="Select the option that most closely describes the reason for sending your shipment. Be accurate - the purpose may affect applicable customs duties and taxes."
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  p {
    font-weight: 400;
  }
  .first-info {
    margin-bottom: 1rem;
    border: 1px solid var(--primary-400);
    border-radius: 3px;
    width: 100%;
    display: flex;
    align-items: stretch; /* set align-items to stretch */
    justify-content: flex-start;
    .first-info-icon {
      padding: 1rem;
      background-color: var(--primary-400);
      color: var(--clr-white);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%; /* set height to 100% */
    }
    .first-info-info {
      flex: 1;
      background-color: var(--primary-200);
      padding: 1rem;
      height: 100%;
      p {
        margin-bottom: 0;
      }
    }
  }
  .shipPurpose {
    width: 100%;
  }
  @media screen and (min-width: 992px) {
    .shipPurpose {
      width: 50%;
    }
  }
`;

export default PackageOption;
