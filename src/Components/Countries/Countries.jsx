/* eslint-disable react-hooks/rules-of-hooks */
import React, { use } from "react";

const countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    console.log(countries);
    return (
        <div>
            <h1>Countries: {countries.length}</h1>
        </div>
    );
};

export default countries;
