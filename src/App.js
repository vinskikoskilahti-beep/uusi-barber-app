import React from 'react';
import BookingForm from './BookingForm';
import './App.css'; // varmista, että CSS on mukana

function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Parturi Ajanvaraus Demo</h1>
      <BookingForm />
    </div>
  );
}

export default App;
