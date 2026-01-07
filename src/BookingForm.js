import React, { useState } from 'react';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ajanvaraus tehty: ${name} klo ${time}`);
    setName('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nimi"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button type="submit">Varaa aika</button>
    </form>
  );
};

export default BookingForm;