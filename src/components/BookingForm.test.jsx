import { render, screen, fireEvent } from '@testing-library/react'
import Reservation from './Reservation'
import { fetchAPI } from '../utils/API'
import { describe, it, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'

describe('Booking Form', () => {

    it('Renders the BookingForm heading', () => {
        render(
            <BrowserRouter>
                <Reservation />
            </BrowserRouter>
        );
        const headingElement = screen.getByText("Reservation");
        expect(headingElement).toBeInTheDocument();
    })
})

describe('initalizeTimes function', () => {

    it('Should initialize the availableTimes state', () => {
        render(
            <BrowserRouter>
                <Reservation />
            </BrowserRouter>
        );
        
        const availableTimes = [fetchAPI(new Date())];
        expect(availableTimes).toBeTypeOf('object');

    })
})

describe('updateTimes function', () => {

    it('Should return the same values provided', () => {
        const { container } = render(
            <BrowserRouter>
                <Reservation />
            </BrowserRouter>
        );
        const dateList = container.querySelector('select');
        fireEvent.change(dateList, { target: { value: '2023-10-26' } });
    })
})