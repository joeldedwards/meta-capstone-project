import { render, screen } from '@testing-library/react'
import BookingForm from './BookingForm';

describe('Booking Form', () => {
    
    test('Renders the BookingForm heading', () => {
        render(<BookingForm />);
        const headingElement = screen.getByText("Book Now");
        expect(headingElement).toBeInTheDocument();
    })
})