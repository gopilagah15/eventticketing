import React from "react";

const ConfirmationPopup = ({ attendee, onClose }) => {
  return (
    <div className="popup">
      <h2>Booking Confirmation</h2>
      <p>Name: {attendee.name}</p>
      <p>Event: {attendee.eventType}</p>
      <p>Seating: {attendee.seatingType}</p>
      <p>Ticket Price: ${attendee.ticketPrice}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ConfirmationPopup;
