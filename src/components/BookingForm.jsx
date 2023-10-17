import React, { useState } from 'react'

function BookingForm() {

    const [resDate, setResDate] = useState('');
    const [availableTimes , setAvailableTimes ] = useState([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ]);
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('occasion');
    const [message, setMessage] = useState('');

    const clearForm = () => {
        setResDate('');
        setAvailableTimes('availableTimes');
        setGuests('');
        setOccasion('occasion');
        setMessage('');
    };

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        alert("Reservation Booked!");
        clearForm();
    };

  return (
    <section id="Reservation">
        <div className="container">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="res-date">Choose Date</label>
                    <input 
                        type="date" 
                        id="res-date" 
                        value={resDate}
                        onChange={(e) => { setResDate(e.target.value); }}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="res-time">Choose Time</label>
                    <select 
                        id="res-time" 
                        value={availableTimes}
                        onChange={(e) => setAvailableTimes(e.target.value)}>
                        {
                            availableTimes.map((time, index) => (
                                <option key={index} value={time}>{time}</option>
                            ))
                        }
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="guests">Number of Guests</label>
                    <input 
                        type="number" 
                        placeholder="1" 
                        min="1" 
                        max="10" 
                        id="guests"
                        value={guests}
                        onChange={(e) => { setGuests(e.target.value); }} />
                </fieldset>
                <fieldset>
                    <label htmlFor="occasion">Occasion</label>
                    <select 
                        id="occasion" 
                        value={occasion} 
                        onChange={(e) => setOccasion(e.target.value)}>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="message">Special Request</label>
                    <textarea 
                        name="message" 
                        id="message" 
                        cols="30" 
                        rows="10"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => { setMessage(e.target.value); }}></textarea>
                </fieldset>
                <button type="submit">Make Your reservation</button>
            </form>
        </div>
    </section>
  )
}

export default BookingForm