import React, { use } from "react";
import { useState } from "react";
import Country from "../Country/country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    // console.log(countries);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        // const saved = localStorage.getItem("visitedCountries");
        // return saved ? JSON.parse(saved) : [];
        setVisitedCountries((prev) => {
            const exists = prev.find(
                (c) => c.name.common === country.name.common,
            );

            if (exists) {
                return prev.filter(
                    (c) => c.name.common !== country.name.common,
                );
            } else {
                return [...prev, country];
            }
        });
    };

    return (
        <div>
            <h1>Countries: {countries.length}</h1>
            <h3>Visited Countries: {visitedCountries.length}</h3>
            <ol>
                {visitedCountries.map((country) => (
                    <li key={country.name.common}>{country.name.common}</li>
                ))}
            </ol>
            <div className="countries">
                {countries.map((country) => (
                    <Country
                        key={country.name.common}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                    />
                ))}
            </div>
        </div>
    );
};

export default Countries;
