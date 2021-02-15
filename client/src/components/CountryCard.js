import React from 'react';

function CountryCard(props) {
  const populationSize = props.country.population.toLocaleString();

  return (
    <div className="mb-5">
      <div className="card bg-light mb-2 text-dark">
        <div className="card-header display-5 pt-4">
          <h3 className="card-title">{props.country.name}</h3>
        </div>
        <div className="card-body py-4">
          <div className="row">
            <div className="col-md-3 mb-4">
              <img
                src={props.country.flag}
                alt={`the flag of ${props.country.name}`}
                className="flag"
              />
            </div>
            <div className="col-md-3">
              <p>
                <span className="font-weight-bold">Region: </span>
                {props.country.region}
              </p>
              <p>
                <span className="font-weight-bold">Subregion: </span>
                {props.country.subregion}
              </p>
              <p>
                <span className="font-weight-bold">Capital City: </span>
                {props.country.capital}
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span className="font-weight-bold">Country Code: </span>
                {props.country.alpha2Code}
              </p>
              <p>
                <span className="font-weight-bold">Population Size: </span>
                {populationSize}
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span className="font-weight-bold">Demonym: </span>
                {props.country.demonym}
              </p>
              <p>
                <span className="font-weight-bold">Native Name: </span>
                {props.country.nativeName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
