// src/store/store.ts
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Flight, FlightDetails } from '@/types/types';
import { fetchFlights, fetchFlightDetails } from '@/utils/api';

interface FlightsState {
  flights: Flight[];
  loading: boolean;
  error: string | null;
}

interface FlightDetailsState {
  details: FlightDetails | null;
  loading: boolean;
  error: string | null;
}

const initialState: FlightsState = {
  flights: [],
  loading: false,
  error: null,
};

const initialDetailsState: FlightDetailsState = {
  details: null,
  loading: false,
  error: null,
};

// Async thunks
export const loadFlights = createAsyncThunk('flights/load', async () => {
  return await fetchFlights();
});

export const loadFlightDetails = createAsyncThunk('flightDetails/load', async (id: string) => {
  return await fetchFlightDetails(id);
});

// Flights slice
const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadFlights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadFlights.fulfilled, (state, action) => {
        state.loading = false;
        state.flights = action.payload;
      })
      .addCase(loadFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load flights';
      });
  },
});

// Flight details slice
const flightDetailsSlice = createSlice({
  name: 'flightDetails',
  initialState: initialDetailsState,
  reducers: {
    clearDetails: (state) => {
      state.details = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadFlightDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadFlightDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload;
      })
      .addCase(loadFlightDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load flight details';
      });
  },
});

export const { clearDetails } = flightDetailsSlice.actions;

export const store = configureStore({
  reducer: {
    flights: flightsSlice.reducer,
    flightDetails: flightDetailsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;