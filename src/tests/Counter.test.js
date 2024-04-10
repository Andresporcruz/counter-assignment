import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter'; 

test('renders counter message', () => {
    render(<Counter />);
    const countElement = screen.getByTestId('count');
    expect(countElement).toBeInTheDocument();
});



// import necessary react testing library helpers here
// import the Counter component here

test('counter message', () => {
    render(<Counter />);
    const countElement = screen.getByTestId('count');
    expect(countElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('+')); 
    fireEvent.click(screen.getByText('-'));
    expect(screen.getByTestId('count')).toHaveTextContent('0'); 
});



