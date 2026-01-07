import React, { useState } from "react";

const BarberCard = ({ barber }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);

  const generateTimes = () => {
    const times = [];
    let hour = 10;
    let minute = 0;

    while (hour < 18 || (hour === 18 && minute === 30)) {
      const h = hour.toString().padStart(2, "0");
      const m = minute.toString().padStart(2, "0");
      times.push(`${h}:${m}`);

      minute += 30;
      if (minute === 60) {
        minute = 0;
        hour++;
      }
    }

    return times;
  };

  if (!barber) return null;

  return (
    <div className="barber-card">
      <h2 className="barber-name">{barber.name}</h2>
      <p className="city">{barber.city}</p>
      <p>{barber.description}</p>
      <p className="price">{barber.price} €</p>

      <button onClick={() => setOpen(!open)}>
        {open ? "Sulje varaus" : "Varaa aika"}
      </button>

      {open && (
        <div className="booking" style={{ marginTop: "16px" }}>
          {/* NIMI */}
          <input
            type="text"
            placeholder="Nimesi"
            style={{ marginBottom: "8px", padding: "8px", width: "100%" }}
          />

          {/* PÄIVÄMÄÄRÄ */}
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setSelectedTime(null);
            }}
            style={{ marginBottom: "12px", padding: "8px", width: "100%" }}
          />

          {/* AIKAVALINTA */}
          {date && (
            <div className="time-grid">
              {generateTimes().map((time) => (
                <button
                  key={time}
                  className={`time-btn ${
                    selectedTime === time ? "active" : ""
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          )}

          {/* VAHVISTUS */}
          {selectedTime && (
            <button className="confirm-btn">
              Vahvista {date} klo {selectedTime}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default BarberCard;
