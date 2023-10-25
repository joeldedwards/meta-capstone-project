import { useState } from 'react'

function BookingForm({availableTimes, dispatchDateChange}) {

    const minDate = new Date().toISOString().split('T')[0];
    const selectedTime = availableTimes[0];
    const [resDate, setResDate] = useState(minDate);
    const [time, setTime] = useState(selectedTime);
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('occasion');
    const [message, setMessage] = useState('');

    const handleDateChange = e => {
        setResDate(e.target.value);
        dispatchDateChange(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    }

    const clearForm = () => {
        setResDate(minDate);
        setTime(selectedTime);
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
            <h1>Book Now</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="res-date">Choose Date</label>
                    <input
                        type="date"
                        id="res-date"
                        min={minDate}
                        value={resDate}
                        onChange={handleDateChange}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="res-time">Choose Time</label>
                    <select
                        id="res-time"
                        value={time}
                        onChange={handleTimeChange}>
                        {
                            availableTimes.map((item, index) => (
                                <option key={index}>{item}</option>
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