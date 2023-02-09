import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../../components/Search'
import CustomButton from '../../components/CustomButton';
import Table from '../../components/Table';
import FormInformation from '../../components/FormInformation';
import endPoints from '../../services/api';

const Home = () => {
  const [searchValue, setSearchValue] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const idAuthor = 4344;

  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get(endPoints.pokemons.getAllPokemonsAPI(idAuthor));
      setPokemons(response.data);
    }
    try {
      getPokemons();
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
  }

  const handleEdit = (id) => {
    console.log("Editing")
  }

  const handleDelete = (id) => {
    console.log("Deleting")
  }

  return (
    <div className="home__container">
      <header>
        <h2>Listado de Pokemon</h2>
        <div>
          <Search
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <CustomButton>
            Nuevo
          </CustomButton>
        </div>
      </header>
      <main>
        <Table
          pokemons={pokemons}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <FormInformation
          handleSubmit={handleSubmit}
        />
      </main>
    </div>
  )
}

export default Home