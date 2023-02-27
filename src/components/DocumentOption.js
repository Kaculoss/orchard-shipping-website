import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useModalContext } from "../contexts/ModalContext";
import { useShipDetailContext } from "../contexts/ShipDetailContext";
import { packDoc } from "../utilities/constants";
import FormRow from "./FormRow";

const DocumentOption = () => {
  const { openProtectModal } = useModalContext();
  const { documentType, setDocDescription, setDocShipReference } =
    useShipDetailContext();

  const [protect, setProtect] = useState(false);

  const filteredDescriptions = packDoc.filter(
    (item) => item.type === "Document"
  );

  const sortedDescriptions = filteredDescriptions.sort((a, b) =>
    a.item.localeCompare(b.item)
  );

  return (
    <>
      <Wrapper className="describe">
        <div className="describe-doc">
          <h6>Describe the documents in your shipments</h6>
          <FormRow
            inputTag={false}
            selectTag={true}
            selectItems={sortedDescriptions}
            selectType="Type 4"
            name="description"
            selectText="Description"
            labelText="Select a description"
            value={documentType.description}
            handleChange={setDocDescription}
            required
            specError={documentType.errors.description}
            overError={documentType.documentError}
            errorText={documentType.errorMsgs.description}
            warnLabel={false}
          />
        </div>
        <div className="describe-ref">
          <h6>Add Shipment References</h6>
          <FormRow
            inputTag={true}
            selectTag={false}
            name="reference"
            labelText="Reference (appears on shipping label/waybil)"
            type="text"
            value={documentType.shipReference}
            placeholdText="Reference (appears on shipping label/waybil)"
            handleChange={setDocShipReference}
            specError={documentType.errors.shipReference}
            warnLabel={false}
          />
        </div>
      </Wrapper>
      <Wrapper className="protect">
        <h5>Protect Your Shipment</h5>
        <p>
          You value your shipment and so do we - don't forget to protect your
          shipment!{" "}
          <span
            style={{ color: "#1d4ed8", cursor: "pointer" }}
            onClick={openProtectModal}
          >
            {" "}
            Learn about our shipment protection options.
          </span>
        </p>
        <label htmlFor="addProtection">
          <input
            type="checkbox"
            name="addProtection"
            id="addProtection"
            checked={protect}
            onChange={() => setProtect(!protect)}
          />
          I would like to add shipment protection to my shipment (Document
          Extended Liability Service)
        </label>
        {protect && (
          <p>
            In the rare event of physical loss of your documents, Orchard will
            compensate for the cost of recovery with a fixed lump sum of 300
            GBP.
          </p>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  &.describe {
    width: 100%;
  }

  &.protect {
    padding: 0.8rem;
    border: 1px solid var(--clr-grey-6);
    p {
      font-weight: 400;
    }
    input {
      margin-right: 0.5rem;
    }
  }
`;

export default DocumentOption;
