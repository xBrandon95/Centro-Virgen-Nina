import Layout from "../components/layout/Layout";
import ContenidoProg from "../components/programa/contenidoProg";
import Plantel from "../components/programa/plantel";
import { desInfantil } from "../components/programa/equipo";

const DesarrolloInfantil = () => {
  const titulo = `Desarrollo Infantil`;
  const descripcion = `Buscamos el crecimiento integral de niños y niñas sin discapacidad, desde los 6 meses a 5 años de edad, para desarrollar en ellos capacidades mediante una atención continua e individualizada en las áreas de educación, salud, nutrición y protección. Estas acciones se complementan bajo Convenio con el programa Manitos del Gobierno Autónomo Municipal de El Alto. Con un equipo de educadoras y el apoyo del equipo multidisciplinario.`;
  const imagen = `/images/DesInfantil/Manitos2.jpg`;

  return (
    <Layout>
      <div className="container mt-5">
        <ContenidoProg
          titulo={titulo}
          descripcion={descripcion}
          imagen={imagen}
        />

        <p className="mt-md-5">
          Este programa crea la posibilidad de una inclusión social y educativa
          de niñas y niños con discapacidad leve, que luego de una valoración
          interdisciplinaria, puedan integrarse al Sistema Educativo Regular.
        </p>

        <h2 className="text-center font-weight-bold mt-5">Nuestro Equipo</h2>
        <hr className="mb-5" />

        <div className="row">
          {desInfantil.map((persona) => (
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

export default DesarrolloInfantil;
