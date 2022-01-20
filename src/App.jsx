import { useEffect, useState } from 'react';
import './App.css'
import PokemonThumnail from './PokemonTumnail';

function App() {
  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState(['https://pokeapi.co/api/v2/pokemon?limit=40'])
  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObj (result){
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])
      })
    }
    createPokemonObj(data.results)
    await console.log(allPokemons)
  }


  useEffect(() => {
    getAllPokemons()
  }, [])
  
  return (
      <div className="app-container">
        <h1>Pokedéx</h1>  
          <div className="pokemon-container">
            <div className="todos-container">
          {allPokemons.map((pokemon, index) =>
            <PokemonThumnail
              id={pokemon.id}
              name={pokemon.name}
              img={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
            />
          )}
            </div>
          </div>
          <button className="load-more" onClick={() => getAllPokemons()}>Exibir mais..</button>
      </div>
  );
}

export default App;
