import React, { useState } from "react";

const TicketForm = ({ onAddAttendee }) => {
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState("concert");
  const [seatingType, setSeatingType] = useState("general");

  const handleSubmit = (e) => {
    e.preventDefault();
    const attendee = {
      name,
      eventType,
      seatingType,
      ticketPrice: seatingType === "vip" ? 100 : 50, // Example pricing
    };
    onAddAttendee(attendee);
    setName("");
    setEventType("concert");
    setSeatingType("general");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Attendee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
        <option value="concert">Concert</option>
        <option value="theater">Theater</option>
        <option value="sports">Sports</option>
      </select>
      <select
        value={seatingType}
        onChange={(e) => setSeatingType(e.target.value)}
      >
        <option value="general">General</option>
        <option value="vip">VIP</option>
      </select>
      <button type="submit">Book Ticket</button>
    </form>
  );
};

export default TicketForm;
