import React from 'react';
import Link from 'gatsby-link';

const PokemonIndexPage = () =>
  <div>
    <h1>Pokemon Index</h1>
    <p>Here are some pokemon:</p>
    <ul>
      <li>
        <Link data-testid="bulbasaur" to="/pokemon/1">
          Bulbasaur
        </Link>
      </li>
      <li>
        <Link data-testid="charmander" to="/pokemon/4">
          Charmander
        </Link>
      </li>
      <li>
        <Link data-testid="squirtle" to="/pokemon/7">
          Squirtle
        </Link>
      </li>
    </ul>
  </div>;

export default PokemonIndexPage;
