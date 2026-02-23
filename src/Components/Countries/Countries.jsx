/* eslint-disable react-hooks/rules-of-hooks */
import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    console.log(countries);
    return (
        <div>
            <h1>Countries: {countries.length}</h1>
            <div className="countries">
                {countries.map((country) => (
                    <Country key={country.name.common} country={country} />
                ))}
            </div>
        </div>
    );
};

export default countries;
