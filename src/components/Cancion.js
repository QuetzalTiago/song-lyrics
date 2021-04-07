import React, { Fragment } from "react";
const Cancion = ({ artista, cancion, letra }) => (
  <Fragment>
    {cancion ? (
      <h2>
        {artista} - {cancion}
      </h2>
    ) : null}
    <p className="letra">{letra}</p>
  </Fragment>
);

export default Cancion;
