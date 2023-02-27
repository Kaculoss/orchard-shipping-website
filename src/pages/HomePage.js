import React from "react";
import {
  Banner,
  Contact,
  CustomerReview,
  Hero,
  Marque,
  Service,
  ShipMadeEasy,
  ShipQuote,
} from "../components";

const HomePage = () => {
  return (
    <main>
      <Banner />
      <ShipQuote />
      <Service />
      <Hero />
      <ShipMadeEasy />
      <CustomerReview />
      <Marque />
      <Contact />
    </main>
  );
};

export default HomePage;
