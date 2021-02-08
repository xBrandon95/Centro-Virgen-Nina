const ContenidoProg = ({ titulo, descripcion, imagen }) => {
  return (
    <>
      <h2 className="text-center font-weight-bold subtitulo">{titulo}</h2>
      <hr className="mb-5" />
      <div className="row align-items-center">
        <div className=" col-lg-5">
          <p className="mb-5 mb-lg-0">{descripcion}</p>
        </div>
        <div className="col-lg-7 mb-5 mb-lg-0">
          <img
            className="imagen-descripcion shadow w-100"
            src={imagen}
            alt={titulo}
            layout="fill"
          />
        </div>
      </div>
    </>
  );
};

export default ContenidoProg;
