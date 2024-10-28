import React from "react";

const Receipt = ({ attendees }) => {
  const totalRevenue = attendees.reduce((total, attendee) => total + attendee.ticketPrice, 0);

  return (
    <div>
      <h2>Receipt</h2>
      <p>Total Revenue: ${totalRevenue}</p>
    </div>
  );
};

export default Receipt;
