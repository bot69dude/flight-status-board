import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { loadFlights } from '@/store/store';
import { FlightTable } from '@/components/FlightTable';

export const FlightListPage = () => {
  const dispatch = useAppDispatch();
  const { flights: currentFlights, loading, error } = useAppSelector((state) => state.flights);
  const [flights, setFlights] = useState(currentFlights);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(loadFlights());
    };

    fetchData(); 
    const interval = setInterval(fetchData, 10000); 

    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    if (JSON.stringify(currentFlights) !== JSON.stringify(flights)) {
      setFlights(currentFlights);
    }
  }, [currentFlights]);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Flight Status Board</h1>
      {error && <div className="text-red-500 p-4">{error}</div>}
      {loading && <div className="p-4">Loading flights...</div>}
      {!loading && !error && <FlightTable flights={flights} />}
    </div>
  );
};