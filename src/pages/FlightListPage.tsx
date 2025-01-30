import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { loadFlights } from '@/store/store';
import { FlightTable } from '@/components/FlightTable';

export const FlightListPage = () => {
  const dispatch = useAppDispatch();
  const { flights, loading, error } = useAppSelector((state) => state.flights);

  useEffect(() => {
    dispatch(loadFlights());
    const interval = setInterval(() => dispatch(loadFlights()), 30000); 
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Flight Status Board</h1>
      {error && <div className="text-red-500 p-4">{error}</div>}
      {loading && <div className="p-4">Loading flights...</div>}
      {!loading && !error && <FlightTable flights={flights} />}
    </div>
  );
};