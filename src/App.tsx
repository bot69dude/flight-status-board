import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FlightListPage } from '@/pages/FlightListPage';
import { FlightDetailPage } from '@/pages/FlightDetailPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FlightListPage />} />
        <Route path="/flights/:id" element={<FlightDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}