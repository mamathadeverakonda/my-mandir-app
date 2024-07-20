import React from "react";
import "./PujaOfferings.css";
import OfferCard from "../../components/OfferCard/OfferCard";

const PujaOfferings = () => {
  return (
    <div className="puja-offerings-page-container">
      <h1 style={{ marginBottom: "2rem" }}>
        Perform your Puja as per Vedic rituals at Famous Hindu Temples in India
        with Sri Mandir
      </h1>
      <h1 style={{ marginBottom: "1rem" }}>Upcoming Pujas on Sri Mandir.</h1>
      <p>
        Book online puja with Sri Mandir in more than 500+ temples across India.
        Receive video of the puja along with the Prasad and receive blessings
        from the divine for prosperity and well-being of you and your family
      </p>
      <div className="offering-cards-container">
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
    </div>
  );
};

export default PujaOfferings;