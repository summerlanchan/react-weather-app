import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div>
      <WeatherApp defaultCity="Tokyo" />
    </div>
  );
}

export default App;
