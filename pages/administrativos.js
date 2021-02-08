import Layout from "../components/layout/Layout";
import Plantel from "../components/programa/plantel";
import { administrativo, servicio } from "../components/programa/equipo";

const Administrativos = (props) => {
  console.log(props);
  return (
    <Layout>
      <div className="container">
        <h2 className="text-center font-weight-bold mt-5 subtitulo">
          Personal Administrativo
        </h2>
        <hr className="mb-5" />

        <div className="row">
          {administrativo.map((persona) => (
            <Plantel
              key={persona.nombre}
              nombre={persona.nombre}
              cargo={persona.cargo}
              img={persona.img}
            />
          ))}
        </div>

        <h2 className="text-center font-weight-bold subtitulo">
          Personal de Servicio
        </h2>
        <hr className="mb-5" />

        <div className="row">
          {servicio.map((persona) => (
            <Plantel
              key={persona.nombre}
              nombre={persona.nombre}
              cargo={persona.cargo}
              img={persona.img}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Administrativos;
