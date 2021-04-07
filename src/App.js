import React, { useState, useEffect, Fragment } from "react";
import Formulario from "./components/Formulario";

function App() {
  //state
  const [busquedaletra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState("");

  //effect
  useEffect(() => {
    if (Object.keys(busquedaletra).length === 0) return;
  }, [busquedaletra]);

  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
        guardarLetra={guardarLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
