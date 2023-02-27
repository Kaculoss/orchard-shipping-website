import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { GoCheck } from "react-icons/go";
import styled from "styled-components";

const FormRow = ({
  inputTag,
  selectTag,
  selectItems,
  selectType,
  // selectDefault,
  type,
  labelText,
  name,
  placeholdText,
  value,
  handleChange,
  overError,
  specError,
  required,
  errorText,
  warnLabel,
  warnLabelText,
  selectText,
}) => {
  // console.log(selectDefault);
  return (
    <Wrapper>
      <div className={`add add-row form-row address-${name}`}>
        {labelText && (
          <label htmlFor={name} className="form-label">
            {warnLabel ? (
              <>
                {labelText}
                <span className="label-warn">
                  {" "}
                  <BsInfoCircleFill color="#1d4ed8" />
                  <span>{warnLabelText}</span>
                </span>
              </>
            ) : (
              <>{labelText}</>
            )}
          </label>
        )}
        <div className="with-star">
          {inputTag && (
            <input
              type={type}
              id={name}
              name={name}
              placeholder={placeholdText}
              value={value}
              className={`form-input ${
                required && overError && specError && "form-error"
              }`}
              onChange={(e) => handleChange(e.target.value)}
            />
          )}
          {selectTag && (
            <select
              value={value}
              onChange={(e) => handleChange(e.target.value)}
              name={name}
              id={name}
              className={`form-select ${
                required && overError && specError && "form-error"
              }`}
            >
              <option value="">--Select {selectText || labelText}--</option>
              {selectItems.map((item, index) => {
                if (selectType === "Type 1")
                  return (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  );
                if (selectType === "Type 2")
                  return (
                    <option key={index} value={item.name.common}>
                      {item.name.common}
                    </option>
                  );
                if (selectType === "Type 3")
                  return (
                    <option
                      value={item}
                      key={index}
                      style={{ textTransform: "capitalize" }}
                    >
                      {item}
                    </option>
                  );
                return (
                  <option key={index} value={item.item}>
                    {item.item}
                  </option>
                );
              })}
            </select>
          )}
          {required ? (
            <>
              {specError ? (
                <div
                  className={`star ${overError && specError && "star-error"}`}
                >
                  *
                </div>
              ) : (
                <GoCheck color="hsl(125, 67%, 44%)" />
              )}
            </>
          ) : (
            <>{specError !== true && <GoCheck color="hsl(125, 67%, 44%)" />}</>
          )}
        </div>
        {required && (
          <>
            {overError && specError && (
              <p className="error-message">{errorText}</p>
            )}
          </>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  .label-warn {
    display: inline-flex;
    align-items: center;
    transition: var(--transition);
    margin-left: 0.4rem;
    cursor: pointer;
    gap: 0.3rem;
    span {
      display: none;
      font-size: 0.7rem;
    }
    &:hover {
      cursor: none;
      span {
        display: inline-block;
        font-size: 0.7rem;
        text-transform: none;
        color: var(--primary-700);
      }
    }
  }
  .form-row {
    p.error-message {
      margin-bottom: 0;
      color: var(--clr-red-light);
      font-size: 0.6rem;
    }
  }
  .with-star {
    display: flex;
    align-items: flex-start;
    gap: 2px;
    .star-error {
      color: var(--clr-red-light);
    }
  }
`;

export default FormRow;
