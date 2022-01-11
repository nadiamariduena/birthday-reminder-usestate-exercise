import React from "react";

import { dataLand } from "./ListLandscape";

const Landscape = () => {
  //
  const [country, setCountry] = React.useState(dataLand);

  //
  const clearItem = (id) => {
    setCountry((countryItem) => {
      let newCountry = countryItem.filter((item) => item.id !== id);
      return newCountry;
    });
  };
  //
  //

  //
  return (
    <>
      <main className="countries">
        <div className="container-countries">
          <h3>{country.length} Countries</h3>{" "}
          {country.map((item) => {
            const { id, country, city, image } = item;
            return (
              <div key={id} className="country-card">
                <img src={image} alt="" />
                <h1>{country}</h1>
                <h4>{city}</h4>
                <button
                  className="btn-card"
                  type="button"
                  onClick={() => clearItem(id)}
                >
                  clear item
                </button>
              </div>
            );
          })}
        </div>{" "}
        <button
          className="btn-card"
          type="button"
          onClick={() => setCountry([])}
        >
          clear all
        </button>
      </main>
    </>
  );
};

export default Landscape;
