export interface Flight {
    id: number;
    flightNumber: string;
    airline: string;
    origin: string;
    destination: string;
    departureTime: string;
    status: "On Time" | "Delayed" | "Boarding" | "Departed";
  }
  
  export interface FlightDetails extends Flight {
    gate: string;
    terminal: string;
    estimatedArrival: string;
  }