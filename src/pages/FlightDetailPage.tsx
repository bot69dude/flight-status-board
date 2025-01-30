import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { loadFlightDetails, clearDetails } from '@/store/store';

interface DetailItemProps {
  label: string;
  value: string | number | null | undefined;
}

const DetailItem = ({ label, value }: DetailItemProps) => (
  <div className="flex justify-between border-b pb-2">
    <span className="font-medium text-gray-600">{label}:</span>
    <span className="text-gray-800">{value || 'N/A'}</span>
  </div>
);

export const FlightDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { details, loading, error } = useAppSelector((state) => state.flightDetails);

  useEffect(() => {
    if (id) {
      dispatch(loadFlightDetails(id));
    }
    return () => {
      dispatch(clearDetails());
    };
  }, [id, dispatch]);

  if (error) return <div className="text-red-500 p-4">{error}</div>;
  if (loading || !details) return <div className="p-4">Loading flight details...</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Flight Details</h1>
      <div className="space-y-4">
        <DetailItem label="Flight Number" value={details.flightNumber} />
        <DetailItem label="Airline" value={details.airline} />
        <DetailItem label="Origin" value={details.origin} />
        <DetailItem label="Destination" value={details.destination} />
        <DetailItem
          label="Departure Time"
          value={new Date(details.departureTime).toLocaleString()}
        />
        <DetailItem label="Terminal" value={details.terminal} />
        <DetailItem label="Gate" value={details.gate} />
        <DetailItem
          label="Estimated Arrival"
          value={new Date(details.estimatedArrival).toLocaleString()}
        />
      </div>
    </div>
  );
};