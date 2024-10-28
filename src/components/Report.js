import React from "react";

const Report = ({ attendees }) => {
  const eventCounts = attendees.reduce((acc, attendee) => {
    acc[attendee.eventType] = (acc[attendee.eventType] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h2>Report</h2>
      <p>Number of Attendees per Event:</p>
      <ul>
        {Object.entries(eventCounts).map(([event, count]) => (
          <li key={event}>
            {event}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Report;
