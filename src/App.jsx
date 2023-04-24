import "./App.css";
import FetchWeather from "./services/FetchWeather";
import Home from "./components/Home";
import Form from "./components/Form";
import { useState, useEffect } from "react";

function App() {
  const [zip, setZip] = useState(null);
  const [country, setCountry] = useState(null);

  return (
    <>
      <div>
        Main JSX
        <Home />
        <Form />
      </div>
    </>
  );
}

export default App;
