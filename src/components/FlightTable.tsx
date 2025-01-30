// src/components/FlightTable.tsx
import { Flight } from '@/types/types';
import { StatusIndicator } from './StatusIndicator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useNavigate } from 'react-router-dom';

interface FlightTableProps {
  flights: Flight[];
}

export const FlightTable = ({ flights }: FlightTableProps) => {
  const navigate = useNavigate();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Flight Number</TableHead>
          <TableHead>Airline</TableHead>
          <TableHead>Origin</TableHead>
          <TableHead>Destination</TableHead>
          <TableHead>Departure Time</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {flights.map((flight) => (
          <TableRow
            key={flight.id}
            className="cursor-pointer hover:bg-gray-50"
            onClick={() => navigate(`/flights/${flight.id}`)}
          >
            <TableCell>{flight.flightNumber}</TableCell>
            <TableCell>{flight.airline}</TableCell>
            <TableCell>{flight.origin}</TableCell>
            <TableCell>{flight.destination}</TableCell>
            <TableCell>
              {new Date(flight.departureTime).toLocaleString()}
            </TableCell>
            <TableCell>
              <StatusIndicator status={flight.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};