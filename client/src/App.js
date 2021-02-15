import './App.css';
import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import Search from './components/Search';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="bg-secondary text-white container d-flex flex-column align-items-center my-5 p-5">
        <div>
          <h1 className="logo-title display-3 font-weight-bold my-3 text-center">
            <i className="fas fa-globe-americas"></i>
            Flag Search
          </h1>
        </div>

        <Search />
      </div>
    </ApolloProvider>
  );
}

export default App;
