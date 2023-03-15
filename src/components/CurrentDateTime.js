import React, { useState } from 'react';

const CurrentDateTime = () => {
    const [dateTime, setDateTime] = useState("");

    var currentDateTime = new Date();

    var year = currentDateTime.getFullYear();
    var month = currentDateTime.getMonth() + 1;
    var day = currentDateTime.getDate();
    var hours = currentDateTime.getHours();
    var minutes = currentDateTime.getMinutes();
    var seconds = currentDateTime.getSeconds();

    var formattedDateTime = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
    return (
        <div>{formattedDateTime}
        </div>
    );
};

export default CurrentDateTime;
