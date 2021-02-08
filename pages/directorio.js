import Layout from "../components/layout/Layout";
import Plantel from "../components/programa/plantel";
import { directorio } from "../components/programa/equipo";

const Directorio = () => {
  return (
    <Layout>
      <div className="container">
        <h2 className="text-center font-weight-bold mt-5">Directorio</h2>
        <hr className="mb-5" />

        <div className="row">
          {directorio.map((persona) => (
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

export default Directorio;
