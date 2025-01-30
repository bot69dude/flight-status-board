import axios from 'axios';
import { Flight, FlightDetails } from '../types/types';

const API_BASE = 'https://flight-status-mock.core.travelopia.cloud';

export const fetchFlights = async () => {
  const response = await axios.get<Flight[]>(`${API_BASE}/flights`);
  return response.data;
};

export const fetchFlightDetails = async (id: string) => {
  const response = await axios.get<FlightDetails>(`${API_BASE}/flights/${id}`);
  return response.data;
};