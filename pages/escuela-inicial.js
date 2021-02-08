import Layout from "../components/layout/Layout";
import ContenidoProg from "../components/programa/contenidoProg";
import { escuelaInicial } from "../components/programa/equipo";
import Plantel from "../components/programa/plantel";

const EscuelaInicial = () => {
  const titulo = `Escuela Inicial en Familia Comunitaria`;
  const descripcion = `Es un proyecto que alberga a 100 niños y niñas del  Primer año de Escolaridad  y el Segundo año de Escolaridad de  Inicial   En sus aulas además de trabajar una educación que va dirigida a reforzar las actividades de la vida diaria con una calidad de vida, enfocada en la independencia personal, fortalece la inclusión educativa, Cada año de 3 a 4 niños siguen un proceso de inclusión a aulas del primero de primaria del sistema regular, con muy buenas expectativas. El horario de asistencia es de 8:30 a 12:30, de lunes a viernes.`;
  const imagen = `/images/EscuelaInicial/0_inicial.jpg`;

  return (
    <Layout>
      <div className="container mt-5">
        <ContenidoProg
          titulo={titulo}
          descripcion={descripcion}
          imagen={imagen}
        />

        <h2 className="text-center font-weight-bold mt-5">Nuestro Equipo</h2>
        <hr className="mb-5" />

        <div className="row">
          {escuelaInicial.map((persona) => (
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

export default EscuelaInicial;
