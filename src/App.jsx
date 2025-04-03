import "./App.css";
import { useEffect, useState } from "react";
import DropDown from "./components/DropDown";
import DateSelector from "./components/DateSelector";
import DisplayHolidays from "./components/DisplayHolidays";

function App() {
    const today = new Date();

    const [startDate, setStartDate] = useState(
        new Date(today.getFullYear(), 0, 1).toISOString().split("T")[0]
    );
    const [endDate, setEndDate] = useState(today.toISOString().split("T")[0]);

    const [countries, setCountries] = useState([
        {
            isoCode: "",
            name: "",
        },
    ]);

    const [holidays, setHolidays] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        fetch("https://openholidaysapi.org/Countries?languageIsoCode=en")
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data) => {
                setCountries(
                    data.map((country) => ({
                        isoCode: country.isoCode,
                        name: country.name?.[0]?.text || "Unknown",
                    }))
                );
            })
            .catch((err) => console.error("Error fetching countries:", err));
    }, []);

    useEffect(() => {
        if (!selectedCountry || !startDate || !endDate) return;

        setHolidays([]);

        fetch(
            `https://openholidaysapi.org/PublicHolidays?countryIsoCode=${selectedCountry}&validFrom=${startDate}&validTo=${endDate}&languageIsoCode=EN`
        )
            .then((res) => res.json())
            .then((data) => {
                setHolidays(data);
            })
            .catch((err) => console.log(err));
    }, [selectedCountry, startDate, endDate]);

    function handleCountryChange(event) {
        setSelectedCountry(event.target.value);
    }

    return (
        <>
            <h1>Holiday Calendar</h1>
            <DropDown
                countries={countries}
                handleCountryChange={handleCountryChange}
            />
            <DateSelector
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
            />

            {(holidays && <DisplayHolidays holidays={holidays} />) || (
                <p>Select a country</p>
            )}
        </>
    );
}

export default App;
