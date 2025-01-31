# Real-Time Flight Status Board

## Overview
This project is a React-based application built with TypeScript that mimics a real-time flight status board. It fetches flight data from a REST API and updates it every 30 seconds using polling.

## Features
- Displays a table of flight details, including:
  - Flight Number
  - Airline
  - Origin
  - Destination
  - Departure Time
  - Status (e.g., "On Time", "Delayed", "Boarding", "Departed")
- Updates flight data every 30 minutes using polling.
- Allows users to click on a flight row to view more detailed flight information.
- Uses React Router for navigation.
- Implements error handling for API failures or missing flight details.
- Styled for clear and user-friendly readability.

## API Details
- **Fetch all flights:** `GET https://flight-status-mock.core.travelopia.cloud/flights`
- **Fetch flight by ID:** `GET https://flight-status-mock.core.travelopia.cloud/flights/:id`

## Tech Stack
- **Language:** TypeScript
- **Framework:** React
- **HTTP Client:** Axios / Fetch API

## Prerequisites
Ensure you have the following installed:
- Node.js (>= 16.x)
- npm (>= 8.x) or yarn

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/bot69dude/flight-status-board.git
   cd flight-status-board
   ```
2. Install dependencies:
   ```sh
   npm install  
   ```
3. Start the development server:
   ```sh
   npm run dev  
   ```


## Deployment
To build the project for production:
```sh
npm run build 
```
To serve the built application:
```sh
npm run preview  
```

## Notes on Polling
- The application fetches fresh flight data **every 30 seconds** to ensure up-to-date statuses.
- If needed, you can adjust the polling interval in the code.

## Error Handling
- Displays user-friendly error messages if:
  - There is a network failure.
  - API request limit is exceeded.
  - The requested flight details are unavailable.

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Commit changes: `git commit -m "Add new feature"`.
4. Push to the branch: `git push origin feature-branch`.
5. Open a pull request.


---
