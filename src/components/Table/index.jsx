import { ReactComponent as Edit } from '../../assets/images/edit.svg';
import { ReactComponent as Delete } from '../../assets/images/delete.svg';

import './index.css';

const Table = ({
  pokemons
}) => {

  return (
    <>
      <section className='table__container'>
        <table aria-label="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Imagen</th>
              <th scope="col">Ataque</th>
              <th scope="col">Defensa</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              pokemons?.map(({ id, name, image, attack, defense }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>
                    <img alt="" src={image} />
                  </td>
                  <td>{attack}</td>
                  <td>{defense}</td>
                  <td>
                    <Edit onClick={() => { }} />
                    <Delete onClick={() => { }} />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </section>
    </>
  )
}

export default Table
