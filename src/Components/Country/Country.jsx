import React from "react";
import "./Country.css";

const country = ({ country }) => {
    return (
        <div className="country">
            <img src={country.flags.flags.png} alt="Country Flag" />
            <h3>{country.name.common}</h3>
            <p>Population: {country.population.population}</p>
        </div>
    );
};

export default country;
