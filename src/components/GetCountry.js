import React, { useState, useEffect } from "react";
// import "./styles.css";
import axios from "axios";

const useCountry = () => {
    const [state, setState] = useState({
        ip: "",
        countryName: "",
        countryCode: "",
        city: "",
        timezone: "",
        country: ""

    });

    const getGeoInfo = () => {
        axios
            .get("https://ipapi.co/json/")
            .then((response) => {
                let data = response.data;
                console.log(data)
                setState({
                    ...state,
                    ip: data.ip,
                    countryName: data.country_name,
                    countryCode: data.country_calling_code,
                    city: data.city,
                    timezone: data.timezone,
                    country: data.country,
                    countryCapital: data.country_capital
                });
            })
            .catch((error) => {
                // console.log(error);
            });
    };

    useEffect(() => {
        getGeoInfo();
    }, []);

    return ({
        ...state
    })

};
export default useCountry;
