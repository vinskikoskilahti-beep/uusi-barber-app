import React, { useState } from "react";
import "./App.css";
import firmat from "./data/firmat";
import BarberCard from "./components/Parturikortti";
import BarberMap from "./Map";

function App() {
  const [activeBarberId, setActiveBarberId] = useState(null);

  return (
    <div className="container">

      {/* Taustavideo / logo */}
      <video
        src="/1767787136782.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "200px", marginBottom: "20px" }}
      />

      <h1>Freesit fadet näiltä lähimmiltä tarjoajilta</h1>

      {/* Parturikortit */}
      <div className="barber-grid">
        {firmat.map((barber) => (
          <BarberCard
            key={barber.id}
            barber={barber}
            isActive={activeBarberId === barber.id}
            setActiveBarberId={setActiveBarberId}
          />
        ))}
      </div>

      {/* Kartta korttien alapuolella */}
      <div style={{ marginTop: "40px" }}>
        <h2>Parturit kartalla</h2>
        <BarberMap barbers={firmat} />
      </div>

    </div>
  );
}

export default App;
