import CustomButton from '../CustomButton';

const FormInformation = ({
  handleSubmit
}) => {

  return (
    <section >
      <h3>Nuevo Pokemon</h3>
      <form onSubmit={handleSubmit} aria-label="Pokemon Form" >
        <div >
          <div >
            <label htmlFor="name">Nombre:</label>
            <input
              aria-label="Name"
              value={"formData?.name"}
              name="name"
              type="text"
            />
          </div>
          <div >
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
          <div >
            <label htmlFor="image">Imagen:</label>
            <input
              aria-label="image"
              value={""}
              name="image"
              type="text"
            />
          </div>
          <div >
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
          <div >
            <CustomButton >Cancelar</CustomButton>
            <CustomButton type="submit">Guardar</CustomButton>
          </div>
        </div>
      </form>
    </section>
  )
}

export default FormInformation
