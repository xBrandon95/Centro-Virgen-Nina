import Link from "next/link";
import Layout from "../components/layout/Layout";

const Nosotros = () => {
  return (
    <Layout>
      <div className="container">
        <h2 className="guindo text-center mt-4 font-weight-bold">
          ¿Quiénes Somos?
        </h2>
        <hr className="mb-0 mb-md-5" />

        <div className="row d-flex flex-column-reverse flex-md-row">
          <div className="col-md-9">
            <h2 className="mb-3">Historia</h2>
            <p className="mb-5">
              La Asociación Centro Virgen Niña - EPDB, fue fundada en agosto de
              1993, por la Hna. Grazia Micaelli y junto a un grupo de laicos
              comprometidos. Es una obra de la Iglesia sin fines de lucro,
              enfocada en el desarrollo humano, social y educativo, trabajando
              en valores de calidad, solidaridad y dignidad.
            </p>

            <h2 className="mb-3">Misión</h2>
            <p className="mb-5">
              Constituirse en un Centro de referencia para la atención integral
              de aquellas poblaciones que son vulnerables como los niños y niñas
              con y sin discapacidad, en su primera infancia, muejeres, jóvenes,
              familias y adultos mayores que viven en condiciones de desventaja,
              contribuyendo a su inclusión y mejoramiento en su calidad de vida.
            </p>

            <h2 className="mb-3">Visión</h2>
            <p className="mb-5">
              Promover la formación, el desarrollo, la atención, el crecimiento
              integral espiritual de niñas y niños, con y sin discapacidad,
              mujeres, adultos mayores y familias en situación de marginalidad
              física, mental, social y económica, que viven en condiciones de
              pobreza con menos oportunidades, creando conjuntamente las
              condiciones, para que sean sujetos de su propio desarrollo.
            </p>

            <h2 className="mb-4">Valores y Principios</h2>
            <ul className="valores mb-5">
              <li className="mb-4">
                Compromiso por los derechos humanos y la dignidad de las
                personas. Promoviendo la igualdad de derechos a la educación,
                salud y nutrición, protección de sectores de la población
                vulnerables, respetando las diferencias individuales.
              </li>
              <li className="mb-4">
                Solidaridad y sensibilidad social. Implementando acciones de
                inclusión Educativa y Social en el ámbito familiar y la
                comunidad local.
              </li>
              <li className="mb-4">
                Reconocer y respetar las diferencias individuales de los
                educandos y de todas las personas que buscan al centro como un
                opción
              </li>
              <li className="mb-4">
                Identidad católica y educación en la fe. Reconociendo a Dios
                como Padre que acoge, ama, respeta apoya y consuela sobre todo a
                los más necesitados, impulsando la acción pastoral a partir de
                un diálogo interreligioso y ecuménico con las religiones
                autóctonas y originarias.
              </li>
              <li className="mb-4">
                Buscando promover redes entre organizaciones similares,
                organismos gubernamentales y no gubernamentales a fin de lograr
                un trabajo coordinado y la participación activa, tanto en la
                detección como en el tratamiento y rehabilitación de niños y
                niñas con discapacidad.
              </li>
            </ul>
          </div>
          <div className="col-md-3 pt-md-3 pt-0 mb-5">
            <Link href="/directorio">
              <a className="btn btn-info btn-block mt-5 font-weight-bold">
                DIRECTORIO
              </a>
            </Link>
            <Link href="/administrativos">
              <a className="btn btn-success btn-block mt-4 font-weight-bold">
                PLANTEL ADMINISTRATIVO
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Nosotros;
