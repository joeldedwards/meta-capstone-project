import { useReducer } from 'react'
import { fetchAPI } from '../utils/API';
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

  return (
    <>
        <section id="BookingHero">
        </section>
        <BookingForm
          availableTimes={availableTimes}
          dispatchDateChange={dispatchDateChange} />
    </>
  )
}

export default Reservation