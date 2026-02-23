import React from "react";
import "./Country.css";
import { useState } from "react";

const Country = ({ country, handleVisitedCountries }) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries(country);
    };
    return (
        <div className="country">
            <img
                src={country.flags.flags.png}
                alt={`${country.name.common} Flag`}
            />
            <h3>{country.name.common}</h3>
            <p>Population: {country.population.poulation}</p>
            <p>
                Area: {country.area.area}{" "}
                {country.area > 300000
                    ? "(Large Country)"
                    : "(Small Country)"}{" "}
            </p>
            <button
                onClick={handleVisited}
                className={visited ? "visited" : ""}
            >
                {visited ? "Visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default Country;
