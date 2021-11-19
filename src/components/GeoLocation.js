import { useState } from "react";
import { getGeoLocation } from "../services/api";
import GeoLocationDetails from "./GeoLocationDetails";

export default function GeoLocation() {
  const [ipAddress, setIpAddress] = useState("");
  const [ipData, setIpData] = useState(null);

  function handleChange(e) {
    setIpAddress(e.target.value);
  }

  async function handleClick() {
    const data = await getGeoLocation(ipAddress);
    setIpData(data);
  }

  return (
    <div className="flex flex-col items-center justify-center mb-16">
      <h1 className="text-4xl text-black font-bold pb-6">
        Geo Location Search
      </h1>
      <input
        type="text"
        id="ip-address"
        className="w-1/3 text-center rounded-lg border-transparent flex-1 appearance-none border border-gray-100 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        name="ip-address"
        placeholder="Enter IP Address here (X.X.X.X)"
        onChange={handleChange}
      />
      <p className="text-indigo-700 font-bold text-md mt-3">
        Keep blank if you want to search for your own IP
      </p>

      <button
        type="button"
        className="py-3 px-6 w-max m-10 bg-indigo-700 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-2xl font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        onClick={handleClick}
      >
        IP Lookup
      </button>
      {ipData != null ? (
        ipData.status == "success" ? (
          <GeoLocationDetails data={ipData} />
        ) : (
          <p className="text-red-500 text-2xl font-bold">
            Error from API. Enter Correct IP
          </p>
        )
      ) : null}
    </div>
  );
}
