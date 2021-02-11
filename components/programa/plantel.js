const Plantel = ({ nombre, cargo, img }) => {
  return (
    <div className=" col-md-6 col-lg-4 col-xl-3 mb4">
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
