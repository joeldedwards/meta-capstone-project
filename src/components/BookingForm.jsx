import { useEffect, useState } from 'react'

function BookingForm({ availableTimes, dispatchDateChange, submitForm }) {

    const minDate = new Date().toISOString().split('T')[0];
    const selectedTime = availableTimes[0];

    const [formData, setFormData] = useState({
        resDate: minDate,
        resTime: selectedTime,
        guests: '',
        occasion: 'birthday',
        message: ''
    });

    const handleFormChange = (e) => {
        if(e.target.id === 'resDate') {
            dispatchDateChange(e.target.value);
        }
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('formData', JSON.stringify(formData));
        submitForm(formData);
    }

  return (
    <section id="Reservation">
        <div className="container">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="resDate">Choose Date <span>*</span></label>
                    <input
                        type="date"
                        id="resDate"
                        min={minDate}
                        onChange={handleFormChange}
                        required></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="resTime">Choose Time <span>*</span></label>
                    <select
                        id="resTime"
                        onChange={handleFormChange}
                        required>
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
                        onChange={handleFormChange} />
                </fieldset>
                <fieldset>
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        onChange={handleFormChange}>
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
                        onChange={handleFormChange}></textarea>
                </fieldset>
                <button type="submit">Make Your Reservation</button>
            </form>
        </div>
    </section>
  )
}

export default BookingForm