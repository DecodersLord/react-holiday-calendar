import React from "react";

function DateSelector({ startDate, setStartDate, endDate, setEndDate }) {
    return (
        <>
            <div>
                <label htmlFor="start">Start date:</label>
                <input
                    type="date"
                    id="start"
                    name="trip-start"
                    defaultValue={startDate}
                    min="2018-01-01"
                    max="2028-12-31"
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <label htmlFor="end">End date:</label>
                <input
                    type="date"
                    id="end"
                    name="trip-start"
                    defaultValue={endDate}
                    min="2018-01-01"
                    max="2028-12-31"
                    onChange={(e) => {
                        console.log(e.target.value);
                        setEndDate(e.target.value);
                    }}
                />
            </div>
        </>
    );
}

export default DateSelector;
