import React from "react";

const BookingForm = () => {
  return (
    <form style={{ margin: "20px 0" }}>
      <input type="text" placeholder="Nimi" required style={{ padding: "8px", marginRight: "8px" }} />
      <input type="date" required style={{ padding: "8px", marginRight: "8px" }} />
      <button type="submit" style={{ padding: "8px 12px", cursor: "pointer" }}>Varaa</button>
    </form>
  );
};

export default BookingForm;
