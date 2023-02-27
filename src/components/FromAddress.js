import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAddressContext } from "../contexts/AddressContext";
import FormRow from "./FormRow";

const FromAddress = () => {
  const {
    formatPhoneNumber,
    fromAddPhoneAddress,
    fromAddAddress1Address,
    fromAddAddress2Address,
    fromAddAddress3Address,
    fromAddCityAddress,
    fromAddCompanyAddress,
    fromAddEmailAddress,
    fromAddCountryAddress,
    fromAddStateAddress,
    fromAddNameAddress,
    fromAddress,
    clearFromAddress,
  } = useAddressContext();

  const [country, setCountry] = useState({
    loading: false,
    countries: [],
    errorMessage: "",
    others: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch spinner
        setCountry((c) => ({ ...c, loading: true }));

        // fetch data
        const url = "https://restcountries.com/v3.1/all";
        const url1 =
          "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json";
        await axios
          .get(url)
          .then((resp) => {
            const sortedCountries = resp.data.sort((a, b) =>
              a.name.common.localeCompare(b.name.common)
            );

            setCountry((c) => ({
              ...c,
              countries: sortedCountries,
            }));
          })
          .then(
            await axios.get(url1).then((resp1) => {
              const sortedOthers = resp1.data.sort((a, b) =>
                a.name.localeCompare(b.name)
              );

              setCountry((c) => ({
                ...c,
                others: sortedOthers,
                loading: false,
              }));
            })
          );
      } catch (err) {
        setCountry((c) => ({
          ...c,
          loading: false,
          errorMessage: "Sorry Something went wrong",
        }));
      }
    };

    fetchData();
  }, []);

  const handlePhoneInput = (value) => {
    const formattedPhoneNo = formatPhoneNumber(value);
    fromAddPhoneAddress(formattedPhoneNo);
  };

  const findCountryData = country.countries?.find((obj) => {
    if (obj.name.common === fromAddress.country) {
      return true;
    }
    return false;
  });

  const findCountryData1 = country.others?.filter(
    (obj) => obj.country === fromAddress.country
  );

  const handleChange = (value) => {
    fromAddCityAddress(value);

    let findCountryData2 = findCountryData1?.find((obj) => {
      if (obj.name === value) {
        return true;
      }
      return false;
    });
    findCountryData2
      ? fromAddStateAddress(findCountryData2.subcountry)
      : fromAddStateAddress("");
  };

  return (
    <Wrapper>
      <h4>From</h4>
      <FormRow
        inputTag={true}
        selectTag={false}
        name="name"
        labelText="Name"
        type="text"
        placeholdText="First Name and Last Name"
        value={fromAddress.name}
        handleChange={fromAddNameAddress}
        required
        specError={fromAddress.errors.name}
        overError={fromAddress.addressError}
        errorText={fromAddress.errorMsgs.name}
        warnLabel={false}
      />
      <FormRow
        inputTag={true}
        selectTag={false}
        name="company"
        labelText="Company"
        type="text"
        value={fromAddress.company}
        handleChange={fromAddCompanyAddress}
        required
        specError={fromAddress.errors.company}
        overError={fromAddress.addressError}
        errorText={fromAddress.errorMsgs.company}
        warnLabel={true}
        warnLabelText="If there is no company name, enter your name again."
      />
      {country.countries && (
        <FormRow
          inputTag={false}
          selectTag={true}
          selectItems={country.countries}
          selectType="Type 2"
          name="country"
          labelText="Country"
          value={fromAddress.country}
          handleChange={fromAddCountryAddress}
          required
          specError={fromAddress.errors.country}
          overError={fromAddress.addressError}
          errorText={fromAddress.errorMsgs.country}
          warnLabel={false}
        />
      )}
      {findCountryData && (
        <FormRow
          inputTag={true}
          selectTag={false}
          name="address1"
          labelText="Address"
          type="text"
          value={fromAddress.address1}
          handleChange={fromAddAddress1Address}
          required
          specError={fromAddress.errors.address1}
          overError={fromAddress.addressError}
          errorText={fromAddress.errorMsgs.address1}
          warnLabel={false}
        />
      )}
      {findCountryData && (
        <FormRow
          inputTag={true}
          selectTag={false}
          name="address2"
          labelText="Address 2"
          type="text"
          value={fromAddress.address2}
          handleChange={fromAddAddress2Address}
          required={false}
          specError={fromAddress.errors.address2}
          warnLabel={false}
        />
      )}
      {findCountryData && (
        <FormRow
          inputTag={true}
          selectTag={false}
          name="address3"
          labelText="Address 3"
          type="text"
          value={fromAddress.address3}
          handleChange={fromAddAddress3Address}
          required={false}
          specError={fromAddress.errors.address3}
          warnLabel={false}
        />
      )}
      {findCountryData1 && (
        <div className=" add-row city-state ">
          <FormRow
            inputTag={false}
            selectTag={true}
            selectItems={findCountryData1}
            selectType="Type 1"
            name="city"
            labelText="City"
            value={fromAddress.city}
            handleChange={handleChange}
            required
            specError={fromAddress.errors.city}
            overError={fromAddress.addressError}
            errorText={fromAddress.errorMsgs.city}
            warnLabel={false}
          />
          <FormRow
            inputTag={true}
            selectTag={false}
            name="state"
            labelText="State / Region"
            type="text"
            value={fromAddress.state}
            handleChange={fromAddStateAddress}
            required
            specError={fromAddress.errors.state}
            overError={fromAddress.addressError}
            errorText={fromAddress.errorMsgs.state}
            warnLabel={false}
          />
        </div>
      )}
      {findCountryData && (
        <div className=" add-row address-number">
          <div className="flag-num">
            <div className="add country-flag">
              <img
                className="img-fluid"
                src={findCountryData.flags.png}
                alt="flag"
              />
            </div>
            <div className="">
              <p>
                {`${findCountryData.idd.root}${findCountryData.idd.suffixes}`}
              </p>
            </div>
          </div>
          <FormRow
            inputTag={true}
            selectTag={false}
            name="phone"
            labelText="Phone"
            type="text"
            value={fromAddress.phone}
            handleChange={handlePhoneInput}
            required
            specError={fromAddress.errors.phone}
            overError={fromAddress.addressError}
            errorText={fromAddress.errorMsgs.phone}
            warnLabel={false}
          />
        </div>
      )}
      <FormRow
        inputTag={true}
        selectTag={false}
        name="email"
        labelText="Email"
        type="text"
        value={fromAddress.email}
        handleChange={fromAddEmailAddress}
        required
        specError={fromAddress.errors.email}
        overError={fromAddress.addressError}
        errorText={fromAddress.errorMsgs.email}
        warnLabel={true}
        warnLabelText="The email should be a 'Gmail' one"
      />
      <div className="clear">
        <button type="button" className="btn" onClick={clearFromAddress}>
          Clear Address
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .clear {
    .btn {
      margin-top: 1rem;
      text-transform: capitalize;
      background-color: transparent;
      color: var(--primary-800);
      font-size: 0.9rem;
      font-weight: 700;
      &:hover {
        background-color: transparent;
        color: var(--primary-400);
      }
    }
  }
  .city-state {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    .address-state,
    .address-city {
      flex: 1;
    }
  }
  .address-number {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    p {
      margin-bottom: 0;
      font-size: 1.1rem;
    }
    .flag-num {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: space-between;
      height: 80px;
    }
    .country-flag {
      img {
        height: 30px;
        width: 45px;
      }
    }
    .address-phone {
      flex: 1;
    }
  }
`;

export default FromAddress;
