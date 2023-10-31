import { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchAPI, submitAPI } from '../utils/API';
import BookingForm from './BookingForm'

const updateTimes = (availableTimes, date) => {
  const res = fetchAPI(new Date(date));

  return (res.length !== 0) ? res : availableTimes;
}

const initializeTimes = (initialTimes) => {
  return [...initialTimes, ...fetchAPI(new Date())];
}
function Reservation() {

  const [availableTimes, dispatchDateChange] = useReducer(updateTimes, [], initializeTimes);

  const navigate = useNavigate();

  const submitForm = (formData) => {
    const isFormSubmitted = submitAPI(formData);

    if(isFormSubmitted) {
      navigate('/confirmation');
    }
  }

  return (
    <>
        <section id="BookingHero">
        </section>
        <BookingForm
          availableTimes={availableTimes}
          dispatchDateChange={dispatchDateChange}
          submitForm={submitForm} />
    </>
  )
}

export default Reservation