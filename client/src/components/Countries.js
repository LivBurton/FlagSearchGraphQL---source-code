import React from 'react';
import { useQuery, gql } from '@apollo/client';
import CountryCard from './CountryCard';
import spinner from '../img/spinner.gif';

const COUNTRY_QUERY = gql`
  query CountryQuery($name: String) {
    country(name: $name) {
      name
      alpha2Code
      capital
      region
      subregion
      population
      flag
      demonym
      nativeName
    }
  }
`;

function Countries(props) {
  const name = props.name;
  const { loading, error, data } = useQuery(COUNTRY_QUERY, {
    variables: { name },
  });

  if (loading) return <img src={spinner} alt="" />;
  if (error) {
    setTimeout(function () {
      window.location.reload();
    }, 2000);
    return (
      <p className="error-message">
        No results found, please try another search
      </p>
    );
  }

  return (
    <div>
      <h2 className="resultsMessage text-light text-center mb-5">
        {data.country.length === 1
          ? `There is 1 country for "${name}"`
          : `There are ${data.country.length} countries for "${name}"`}
      </h2>

      <div>
        {data.country.map(country => (
          <CountryCard key={country.alpha2Code} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Countries;
