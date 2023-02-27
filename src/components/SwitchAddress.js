import React from "react";
import styled from "styled-components";
import {
  HiOutlineSwitchHorizontal,
  HiOutlineSwitchVertical,
} from "react-icons/hi";
import { useState } from "react";
import { useEffect } from "react";
import { useAddressContext } from "../contexts/AddressContext";

const SwitchAddress = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const { switchAddress } = useAddressContext();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <div className="div-top"></div>
      <div>
        <button type="button" className="btn" onClick={switchAddress}>
          {width > 991 ? (
            <>
              <HiOutlineSwitchHorizontal /> Switch
            </>
          ) : (
            <>
              <HiOutlineSwitchVertical /> Switch
            </>
          )}
        </button>
      </div>
      <div className="div-down"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  flex-direction: row;
  height: 100%;
  width: 100%;
  button.btn {
    display: flex;
    text-transform: capitalize;
    gap: 0.3rem;
    justify-content: center;
    align-items: center;
  }
  .div-top {
    height: 3px;
    width: 80px;
    border-radius: 2px;
    background-color: var(--clr-grey-5);
  }
  .div-down {
    height: 3px;
    width: 100%;
    border-radius: 2px;
    background-color: var(--clr-grey-5);
  }
  @media screen and (min-width: 992px) {
    flex-direction: column;
    width: initial;
    .div-top {
      height: 100px;
      width: 3px;
    }
    .div-down {
      height: 800px;
      width: 3px;
    }
  }
`;

export default SwitchAddress;
