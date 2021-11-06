import React, { Component } from 'react';
import data from './data';

class PokeDetails extends Component {
  render() {
    // Get pokemon id trough link by match params
    const { id } = this.props.match.params;
    // Filter pokemon by matching id of the link with the id from data
    const foundPokemon = data.filter((pokemon) => String(pokemon.id) === id);

    // Use info from foundPokemon to render
    return (
      <div>
        { foundPokemon.map((pokemon) => (
          <div>
            <p>{ pokemon.name }</p>
            <p>{ pokemon.type }</p>
            <p>{ `${pokemon.averageWeight.value}${pokemon.averageWeight.measurementUnit}` }</p>
            <p>{ pokemon.summary }</p>
            <p>{ pokemon.foundAt.map((local) => (
              <div>
                <p>{ local.location }</p>
                <img src={ local.map } alt={ local.location } />
              </div>
            )) }</p>
          </div>
        )) }
      </div>
    )
  }
}

export default PokeDetails;
