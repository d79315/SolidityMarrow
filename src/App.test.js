// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidityMarrow title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidityMarrow/i);
    expect(titleElement).toBeInTheDocument();
});
