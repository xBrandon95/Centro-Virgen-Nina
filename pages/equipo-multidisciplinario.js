import ReactPlayer from "react-player";
import Layout from "../components/layout/Layout";
import ContenidoProg from "../components/programa/contenidoProg";
import Plantel from "../components/programa/plantel";
import { eqMultidisciplinario } from "../components/programa/equipo";

const EquipoMultidisciplinario = () => {
  const titulo = `Equipo Multidisciplinario`;
  const descripcion = `Tiene como objetivo mejorar la calidad de vida de cada usuario que acuda a nosotros, realizamos evaluaciones multidisciplinarias valorando a pacientes de manera independiente y en cada área que sea necesaria para llegar a obtener una conclusión final sobre las potencialidades y debilidades, dando así una respuesta a la necesidad que sea encontrada, de manera que sea adecuado y pertinente el tratamiento o la rehabilitación.`;
  const imagen = `/images/EqMultidisciplinario/0_EqMult.jpg`;

  return (
    <Layout>
      <div className="container mt-5">
        <ContenidoProg
          titulo={titulo}
          descripcion={descripcion}
          imagen={imagen}
        />

        <p className="mt-md-5 ">
          Contamos con las áreas de Medicina General, Enfermería, Nutrición,
          Fisioterapia, Psicomotricidad, Fonoaudiología, Psicología, Apoyo
          Especifico en Autismo, Trabajo Social y Psicopedagogía.
        </p>

        <h2 className="font-weight-bold text-center mt-5 mb-5 mb-md-0 subtitulo">
          Evaluación Multidisciplinaria
        </h2>

        <div className="row d-flex justify-content-between align-items-center pt-md-5 pb-2">
          <div className="col-12 col-lg-5 pb-4">
            <p className="pr-md-4">
              Antes de iniciar la Evaluación Multidisciplinaria es necesario
              reunir algunos requisitos, nuestra enfermera le proporcionará una
              pequeña lista donde se muestra la documentación necesaria para la
              evaluación.
            </p>

            <p className="pr-md-4">
              Cuando reúna los requisitos será citado para comenzar con el
              recorrido como se muestra en este video.
            </p>
          </div>
          <div className="col-12 col-lg-7 embed-responsive">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=AUBRURsI8C0"
            />
          </div>
        </div>

        <p className="mt-4 mt-md-5">
          La Evaluación Multidisciplinaria es una valoración completa en la cual
          intervienen las áreas de Medicina General, Nutrición, Trabajo Social,
          Fisioterapia, Psicomotricidad, Fonoaudiología, Psicología, Pedagogía
          (Educativo) y en algunos casos Apoyo especifico en Autismo, con el fin
          de orientar a los padres en todos estos ámbitos.
        </p>

        <h2 className="text-center font-weight-bold mt-5 subtitulo">
          Nuestro Equipo
        </h2>
        <hr className="mb-5" />

        <div className="row">
          {eqMultidisciplinario.map((persona) => (
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

export default EquipoMultidisciplinario;
