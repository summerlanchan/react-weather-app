import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div>
      <p>Weather</p>
      <WeatherApp defaultCity="Tokyo" />
    </div>
  );
}

export default App;
