import "./App.css";
import CryptoPrices from "./components/CryptoPrices";
import GeoLocation from "./components/GeoLocation";
import NavigationHeader from "./components/NavigationHeader";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <NavigationHeader login={login} setLogin={setLogin} />
        {login === false ? (
          <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-300">
            <Login setLogin={setLogin} />
          </div>
        ) : null}
      </div>
      {login ? (
        <div className="bg-gray-300 w-full min-h-screen p-10">
          <GeoLocation />
          <CryptoPrices />
        </div>
      ) : null}
    </div>
  );
}

export default App;
