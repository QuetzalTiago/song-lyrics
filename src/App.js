import React, { useState, useEffect, Fragment } from "react";
import Formulario from "./components/Formulario";
import Cancion from "./components/Cancion";

function App() {
  //state
  const [busquedaletra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState("");
  const [artista, guardarArtista] = useState("");
  const [cancion, guardarCancion] = useState("");

  //effect
  useEffect(() => {
    if (Object.keys(busquedaletra).length === 0) return;
  }, [busquedaletra]);

  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
        guardarLetra={guardarLetra}
        guardarCancion={guardarCancion}
        guardarArtista={guardarArtista}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">1</div>
          <div className="col-md-6">
            {" "}
            <Cancion letra={letra} artista={artista} cancion={cancion} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
