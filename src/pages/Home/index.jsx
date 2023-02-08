import { useState } from 'react';
import Search from '../../components/Search'
import CustomButton from '../../components/CustomButton';
import Table from '../../components/Table';

const Home = () => {
  const [searchValue, setSearchValue] = useState([]);
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
        <Table>

        </Table>
      </main>
    </div>
  )
}

export default Home