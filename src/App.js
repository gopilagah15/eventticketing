import React, { useState } from "react";
import TicketForm from "./components/TicketForm";
import ConfirmationPopup from "./components/ConfirmationPopup";
import Receipt from "./components/Receipt";
import Report from "./components/Report";

const App = () => {
  const [attendees, setAttendees] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentAttendee, setCurrentAttendee] = useState(null);

  const handleAddAttendee = (attendee) => {
    setAttendees([...attendees, attendee]);
    setCurrentAttendee(attendee);
    setShowPopup(true);
  };

  return (
    <div>
      <h1>Event Ticketing System</h1>
      <TicketForm onAddAttendee={handleAddAttendee} />
      {showPopup && (
        <ConfirmationPopup
          attendee={currentAttendee}
          onClose={() => setShowPopup(false)}
        />
      )}
      <Receipt attendees={attendees} />
      <Report attendees={attendees} />
    </div>
  );
};

export default App;
