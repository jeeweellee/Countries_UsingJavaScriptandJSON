import ReactDOM from "react-dom";
import "mvp.css";

import App from "./App";

// Async IIFE to pre-fetch the data and render App.
// Don't worry about the implementation details for now.
// Pre-fetching the data keeps our components simple.
// We'll explore more integrate data loading later.
(async function () {
  // Fetch API data on world countries.
  const url =
    "https://gist.githubusercontent.com/stungeye/e34eee4f6665a077d320e15e2910b97a/raw/830c1a0125430d3b619ef438380e2e1fa874bf84/countries.json";
  const apiResponse = await fetch(url);

  // Parse response JSON into an array.
  const countries = await apiResponse.json();

  // Render the App component to the div#root in markup.
  const root = document.getElementById("root");
  ReactDOM.render(<App countries={countries} />, root);
})();
