import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Body() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  function fetchData(searchText) {
    console.log(searchText);
    axios
      .get("https://restcountries.com/v3.1/name/" + searchText)
      .then((res) => {
        setData(res.data[0]);
        console.log(res.data[0]);
      })
      .catch((error) => {
        console.log("Something went wrong❌");
      });
  }

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="p-4  relative -left-3 -top-20">
        <div className="mb-4 relative left-3">
          <input
            className="p-2 font-bold rounded-l-lg mt-20 focus:outline-none   text-slate-500 border-2"
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Enter country name..."
            value={searchText}
          />
          <button
            className="p-2 rounded-r-lg  font-bold text-white bg-slate-500"
            onClick={() => {
              fetchData(searchText);
            }}
          >
            Search
          </button>
        </div>
        {data.length == 0 ? (
          <span></span>
        ) : (
          <div className="detail flex justify-center">
            <div>
              <img className="w-[320px] h-52" src={data.flags.png} alt="flag" />
              <div className="flex justify-center mt-2">
                <ul className="text-[17px] py-2 font-semibold text-center">
                  <li className="border-b-2 border-emerald-500">
                    Name :{" "}
                    <span className="text-emerald-700">{data.name.common}</span>
                  </li>
                  <li className="border-b-2 border-emerald-500">
                    Capital :{" "}
                    <span className="text-emerald-700"> {data.capital}</span>
                  </li>

                  <li className="border-b-2 border-emerald-500">
                    Population:{" "}
                    <span className="text-emerald-700">
                      {(data.population / 10000000).toFixed(2)} Millions
                    </span>
                  </li>
                  <li className="border-b-2 border-emerald-500">
                    Area :{" "}
                    <span className="text-emerald-700">{data.area}</span>
                  </li>
                  <li className="border-b-2 border-emerald-500">
                    Region :{" "}
                    <span className="text-emerald-700">{data.region}</span>
                  </li>
                  <li>
                    SubRegion :{" "}
                    <span className="text-emerald-700">{data.subregion}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Body;
