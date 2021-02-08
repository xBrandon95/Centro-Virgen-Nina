const Plantel = ({ nombre, cargo, img }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-5">
      <div className="card shadow">
        <div className="card-image">
          <img src={img} className="card-img-top" alt={nombre} />
        </div>
        <div className="card-body">
          <div className="content">
            <p className="card-text plantel-texto">{nombre}</p>
            <p className="card-text plantel-texto text-center font-weight-bold">
              {cargo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plantel;
