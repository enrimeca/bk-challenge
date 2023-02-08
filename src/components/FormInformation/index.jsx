import CustomButton from '../CustomButton';
import './index.css';

const FormInformation = ({
  handleSubmit,
}) => {

  return (
    <section className="form__container">
      <h3>Nuevo Pokemon</h3>
      <form onSubmit={handleSubmit} aria-label="Pokemon Form" >
        <div className='form__content'>
          <div className='form__name'>
            <label htmlFor="name">Nombre:</label>
            <input
              aria-label="Name"
              value={""}
              name="name"
              type="text"
            />
          </div>
          <div className='form__attack'>
            <label htmlFor="price">Ataque:</label>
            0<input
              aria-label="Attack"
              value={0}
              name="attack"
              type="range"
              min="0"
              max="100"
              step="1"
            />100
          </div>
          <div className='form__image'>
            <label htmlFor="image">Imagen:</label>
            <input
              aria-label="image"
              value={""}
              name="image"
              type="text"
            />
          </div>
          <div className='form__defense'>
            <label htmlFor="defense">Defensa:</label>
            0<input
              aria-label="Defense"
              value={0}
              name="defense"
              type="range"
              min="0"
              max="100"
              step="1"
            />100
          </div>
          <div className='form__buttons'>
            <CustomButton >Cancelar</CustomButton>
            <CustomButton type="submit">Guardar</CustomButton>
          </div>
        </div>
      </form>
    </section>
  )
}

export default FormInformation
