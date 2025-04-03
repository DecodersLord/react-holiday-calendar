import React from "react";

function DisplayHolidays({ holidays }) {
    console.log(holidays);

    return (
        <>
            {holidays.map((holiday) => (
                <p>
                    <span key={holiday.isoDate}>{holiday.name[0].text}</span>
                    <span key={holiday.isoDate}>{holiday.startDate}</span>
                </p>
            ))}
        </>
    );
}

export default DisplayHolidays;
