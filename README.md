# Nitte Bus Tracker

A modern web application to track and manage campus bus services at Nitte University. Built with React and featuring a responsive design with dark/light theme support.

## Features

- **Real-Time Bus Tracking**
  - View all campus buses and their current status
  - Track buses by route and stop locations
  - See detailed bus information including arrival/departure times

- **Smart Filtering**
  - Search buses by name, route, or stops
  - Filter buses by route direction
  - Find buses by nearest stop location

- **Interactive Interface**
  - Responsive design that works on desktop and mobile
  - Dark/light theme with system preference detection
  - Collapsible sidebar for better space utilization
  - Animated transitions and hover effects

- **Stop Management**
  - View all stops for each bus route
  - See upcoming departures for each stop
  - Quick access to nearest stop information

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nitte-bus-tracker.git
   ```

2. Navigate to project directory:
   ```bash
   cd nitte-bus-tracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

1. **Finding a Bus**
   - Use the search bar to find buses by name or route
   - Select from the "All Buses" dropdown to filter by specific route
   - Click on a bus card to view detailed information

2. **Finding Stops**
   - Use the "Select Nearest Stop" dropdown to find buses by stop
   - Stops show next departure time and bus information
   - Upcoming departures are highlighted

3. **Theme Switching**
   - Click the theme toggle in the top bar to switch between dark and light modes
   - Theme preference is saved and persists between sessions
   - Automatically detects system theme preference on first visit

## Project Structure

```
nitte-bus-tracker/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── BusCard.jsx
│   │   ├── Layout.jsx
│   │   ├── Sidebar.jsx
│   │   └── Topbar.jsx
│   ├── context/
│   │   └── AppUIContext.jsx
│   ├── data/
│   │   └── buses.json
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   └── BusDetailPage.jsx
│   └── styles/
│       ├── App.css
│       ├── index.css
│       └── [component].css
└── package.json
```

## Built With

- [React](https://reactjs.org/) - Frontend framework
- [React Router](https://reactrouter.com/) - Navigation and routing
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - Theming and styling

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Nitte University for supporting the project
- All contributors who helped improve the application
- React community for excellent documentation and resources
