// import logo from "./logo.svg";
import "./App.css";
import Weather from "./components/currentLocation";

function App() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="container">
        <Weather />
      </div>
      <div className="footer-info">
        {/* <a href="/">Download Source Code</a> */}
        <a target="_blank" href="/">
          Developed by Pradyumna Kumar Naik {""}
        </a>
        | <br /> @copyrights {year} all rights reserved.
      </div>
    </>
  );
}

export default App;
