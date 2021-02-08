const Footer = () => {
  const anio = new Date().getFullYear();

  return (
    <footer className="site-footer pt-5 pb-3 mt-4 bg-primary text-white">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6">
            <h4 className="mb-3">Contáctanos:</h4>
            <div className="d-flex flex-column align-items-center">
              <p>
                <span className="contactos">Telf:</span> 22841126
              </p>
              <p className="text-center">
                <span className="contactos">Correo: </span>
                virgenninaepdb@gmail.com
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <h4 className="mb-4">Siguenos en:</h4>
            <div className="w-50 m-auto d-flex justify-content-around">
              <a
                href="https://www.facebook.com/virgennina1993/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="redes-sociales"
                  src="/images/redes-sociales/facebook.svg"
                  alt="facebook"
                />
              </a>

              <a
                href="https://www.youtube.com/channel/UCxM6f0DJe6885WetuFVlrbg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="redes-sociales"
                  src="/images/redes-sociales/youtube.svg"
                  alt="facebook"
                />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center">Todos los Dechos Reservados &copy; {anio}</p>
      </div>
    </footer>
  );
};

export default Footer;
