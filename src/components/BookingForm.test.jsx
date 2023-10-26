import { render, screen, fireEvent } from '@testing-library/react'
import Reservation from './Reservation';
import { describe } from 'vitest';

describe('Booking Form', () => {
    
    it('Renders the BookingForm heading', () => {
        render(<Reservation />);
        const headingElement = screen.getByText("Book Now");

        expect(headingElement).toBeInTheDocument();
    })
})

describe('initalizeTimes function', () => {
    
    it('Should initialize the availableTimes state', () => {
        const { container } = render(<Reservation />);
        const timesList = container.querySelector('select');
        const availableTimes = [
            '17:00',
            '17:30',
            '18:30',
            '19:00',
            '20:00',
            '22:00',
            '22:30',
        ];
        const timesItems = timesList.querySelectorAll('option');
        const actualTimes = Array.from(timesItems).map((item) => item.textContent);

        expect(actualTimes).toEqual(availableTimes);
        
    })
})

describe('updateTimes function', () => {
    
    it('Should return the same values provided', () => {
        const { container } = render(<Reservation />);
        const dateList = container.querySelector('select');
        fireEvent.change(dateList, { target: { value: '2023-10-26' } });
    })
})