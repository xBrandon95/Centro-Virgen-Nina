import Layout from "../components/layout/Layout";
import ContenidoProg from "../components/programa/contenidoProg";

const AsistenciaSocial = () => {
  const titulo = `Area de Asistencia Social`;
  const descripcion = `Asistencia Social apoya a muchos abuelitos y abuelitas, que asisten a recibir apoyo médico, alimentos, sobre todo cariño y casi 100 familias que llegan al Centro en busca de socorro, de afecto y sobre todo de un trato digno. Alrededor de 500 paquetes alimenticios que constan de arroz, harina, azúcar, aceite, algún cereal, huevos y fruta, se entregan cada 15 días.`;
  const imagen = `/images/AsistSocial/social.jpg`;

  return (
    <Layout>
      <div className="container mt-5">
        <ContenidoProg
          titulo={titulo}
          descripcion={descripcion}
          imagen={imagen}
        />

        <p className="mt-0 mt-md-5 mb-5">
          {" "}
          El derecho a la familia para nuestros abuelitos es fortalecido con el
          pequeño apoyo que nosotros les damos. Algunas veces también reciben
          asistencia médica primaria, enfermería, terapias de psicomotricidad
          geriátrica para adultos y algunas actividades de distracción.
        </p>
      </div>
    </Layout>
  );
};

export default AsistenciaSocial;
