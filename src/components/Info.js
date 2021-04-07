import React from "react";
const Info = ({ info }) => {
  if (Object.keys(info).length === 0) return null;
  const { strArtist, strArtistThumb, strGenre, strBiographyES } = info;
  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Información del Artista
      </div>
      <div className="card-body">
        {info.idArtist === "157143" ? (
          <img
            src="https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.6435-9/80370692_2548682948582179_4205679607430512640_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=973b4a&_nc_ohc=PyT7z7e_x74AX9yEMMl&_nc_ht=scontent.fmvd2-1.fna&oh=b5dd2404ffab75249adb859f46855a5f&oe=60921681"
            alt={strArtist}
          />
        ) : (
          <img src={strArtistThumb} alt={strArtist} />
        )}
        <h3 className="card-text">{strArtist}</h3>
        <p className="card-text">
          <strong>Género: </strong>
          {strGenre}
        </p>
        {strBiographyES ? (
          <p className="card-text">
            <strong>Biografía: </strong>
            {strBiographyES}
          </p>
        ) : null}
        <p className="card-tx">
          <a
            href={`https://${info.strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${info.strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`${info.strLastFMChart}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Info;
