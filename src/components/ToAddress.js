import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAddressContext } from "../contexts/AddressContext";
import FormRow from "./FormRow";

const ToAddress = () => {
  const {
    formatPhoneNumber,
    toAddPhoneAddress,
    toAddAddress1Address,
    toAddAddress2Address,
    toAddAddress3Address,
    toAddCityAddress,
    toAddCompanyAddress,
    toAddEmailAddress,
    toAddCountryAddress,
    toAddStateAddress,
    toAddNameAddress,
    toAddress,
    clearToAddress,
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
    toAddPhoneAddress(formattedPhoneNo);
  };

  const findCountryData = country.countries?.find((obj) => {
    if (obj.name.common === toAddress.country) {
      return true;
    }
    return false;
  });

  const findCountryData1 = country.others?.filter(
    (obj) => obj.country === toAddress.country
  );

  const handleChange = (value) => {
    toAddCityAddress(value);

    let findCountryData2 = findCountryData1?.find((obj) => {
      if (obj.name === value) {
        return true;
      }
      return false;
    });
    findCountryData2
      ? toAddStateAddress(findCountryData2.subcountry)
      : toAddStateAddress("");
  };

  return (
    <Wrapper>
      <h4>To</h4>
      <FormRow
        inputTag={true}
        selectTag={false}
        name="name"
        labelText="Name"
        type="text"
        placeholdText="First Name and Last Name"
        value={toAddress.name}
        handleChange={toAddNameAddress}
        required
        specError={toAddress.errors.name}
        overError={toAddress.addressError}
        errorText={toAddress.errorMsgs.name}
        warnLabel={false}
      />
      <FormRow
        inputTag={true}
        selectTag={false}
        name="company"
        labelText="Company"
        type="text"
        value={toAddress.company}
        handleChange={toAddCompanyAddress}
        required
        specError={toAddress.errors.company}
        overError={toAddress.addressError}
        errorText={toAddress.errorMsgs.company}
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
          value={toAddress.country}
          handleChange={toAddCountryAddress}
          required
          specError={toAddress.errors.country}
          overError={toAddress.addressError}
          errorText={toAddress.errorMsgs.country}
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
          value={toAddress.address1}
          handleChange={toAddAddress1Address}
          required
          specError={toAddress.errors.address1}
          overError={toAddress.addressError}
          errorText={toAddress.errorMsgs.address1}
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
          value={toAddress.address2}
          handleChange={toAddAddress2Address}
          required={false}
          specError={toAddress.errors.address2}
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
          value={toAddress.address3}
          handleChange={toAddAddress3Address}
          required={false}
          specError={toAddress.errors.address3}
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
            value={toAddress.city}
            handleChange={handleChange}
            required
            specError={toAddress.errors.city}
            overError={toAddress.addressError}
            errorText={toAddress.errorMsgs.city}
            warnLabel={false}
          />
          <FormRow
            inputTag={true}
            selectTag={false}
            name="state"
            labelText="State / Region"
            type="text"
            value={toAddress.state}
            handleChange={toAddStateAddress}
            required
            specError={toAddress.errors.state}
            overError={toAddress.addressError}
            errorText={toAddress.errorMsgs.state}
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
            type="tel"
            value={toAddress.phone}
            handleChange={handlePhoneInput}
            required
            specError={toAddress.errors.phone}
            overError={toAddress.addressError}
            errorText={toAddress.errorMsgs.phone}
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
        value={toAddress.email}
        handleChange={toAddEmailAddress}
        required
        specError={toAddress.errors.email}
        overError={toAddress.addressError}
        errorText={toAddress.errorMsgs.email}
        warnLabel={true}
        warnLabelText="The email should be a 'Gmail' one"
      />
      <div className="clear">
        <button type="button" className="btn" onClick={clearToAddress}>
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

export default ToAddress;
