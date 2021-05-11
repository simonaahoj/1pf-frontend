import { useState } from "react";
import "./App.css";

import ExchangeRatesTable from "./components/ExchangeRatesTable";
import Search from "./components/Search";
import useRates from "./hooks";

function App() {
  const [error, rates] = useRates();
  const [filter, setFilter] = useState("");

  function searchName(evt: React.ChangeEvent<HTMLInputElement>) {
    setFilter(evt.target.value);
  }

  return (
    <div className="App">
      <Search handleChange={searchName} />
      {error ? (
        <label>doesnt't work: {error}</label>
      ) : (
        <ExchangeRatesTable rates={rates} filter={filter} />
      )}
    </div>
  );
}

export default App;
