import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PublicDocument from '../PublicDocument';

test('renders public document with ID param', () => {
  render(
    <MemoryRouter initialEntries={['/doc/abc123']}>
      <Routes>
        <Route path="/doc/:id" element={<PublicDocument />} />
      </Routes>
    </MemoryRouter>
  );
  expect(screen.getByText(/abc123/i)).toBeInTheDocument();
});
