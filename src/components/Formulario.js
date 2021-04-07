import React, { useState } from "react";

const Formulario = () => {
  //state
  const [busqueda, guardarBusqueda] = useState({
    artista: "",
    cancion: "",
  });
  const [error, guardarError] = useState(false);

  const { artista, cancion } = busqueda;

  const handleChange = (e) => {
    const { name, value } = e.target;
    guardarBusqueda({ ...busqueda, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (artista.trim() === "" || cancion.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    //api call
  };

  return (
    <div className="bg-info">
      <div className="row">
        <div className="container">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            action=""
          >
            <fieldset>
              <legend className="text-center">Buscador Letras Canciones</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre artista"
                      name="artista"
                      value={artista}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre cancion"
                      name="cancion"
                      value={cancion}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submut"
                className="btn btn-primary float-right"
                onClick={handleClick}
              >
                Buscar
              </button>
              {error ? <h1>Todos los campos son requeridos!</h1> : null}
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
