const Info = () => {
  return (
    <section className="seccion">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-6 mb-5">
            <div className="contenedor-mapa">
              <h2 className="text-center font-weight-bold">Encuentranos en:</h2>
              <hr className="mb-3 mb-md-5" />
              <p className="text-center">
                El Alto, Zona Los Andes, Calle Esteban Balboa No. 10
              </p>
              <div>
                <img
                  src="/images/ubicacion.png"
                  alt="ubicacion"
                  className="leaflet-container d-none d-md-block rounded"
                />
                <img
                  src="/images/ubicacion2.png"
                  alt="ubicacion"
                  className="leaflet-container d-block d-md-none rounded"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 pr-md-5">
            <h2 className="text-center font-weight-bold mb-3">
              Centro Virgen Niña
            </h2>
            <hr className="mb-3 mb-md-5" />
            <p>
              El Centro “Virgen Niña, EPDB” tiene como Misión promover la
              formación, la atención, y el desarrollo integral y espiritual de
              niños y niñas, jóvenes, mujeres, adultos mayores y familias en
              situación de pobreza y marginalidad, que tuvieron menos
              oportunidades en la vida.{' '}
            </p>
            <p className="mensaje">"Por una vida digna, toda la vida"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
