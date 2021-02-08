import ReactPlayer from "react-player";
import Layout from "../components/layout/Layout";
import ContenidoProg from "../components/programa/contenidoProg";

const VirgenNina = () => {
  const titulo = `Virgen Niña`;
  const descripcion = `Un 6 de enero de 1840, durante los festejos de la epifanía del Señor. Sor Magdalena ante el pesebre del Niño Dios se preguntó: ¿Por qué a la Madre de Dios no se le celebraba su nacimiento como a su hijo Jesús?
    Y mientras reflexionaba acerca de cómo alabar a la Santísima Virgen Niña, ella se le apareció recién nacida con un vestido de luces, sobre unas nubes, recostada y escuchó que decía:`;
  const imagen = `/images/virgen/02_virgen.jpeg`;
  const oracion = `/images/virgen/oracion.png`;

  return (
    <Layout>
      <div className="container mt-5">
        <ContenidoProg
          titulo={titulo}
          descripcion={descripcion}
          imagen={imagen}
        />
        <h3 className="mt-md-5 text-center font-weight-bold text-uppercase mensaje">
          “Concederé todas las gracias que me pidan las personas que me honren
          en mi infancia, pues es una devoción muy olvidada”.
        </h3>
        <p className="mt-md-5 mb-5 mb-md-0"></p>

        <p>
          Conmovida por tan inexplicable evento comenzó a comunicarlo a su
          comunidad, su corazón sintió la alegría de venerarla por lo que pidió
          permiso a la Madre Guadalupe de San Lorenzo para que se realizara una
          advocación de la aparición que había presenciado y así cumplir con el
          deseo de devoción de la Santísima Virgen Niña. Sin embargo, la
          superiora resistiéndose y probando si la aparición no fue un delirio
          de Sor Magdalena, decidió hacer caso omiso del hecho pensando que si
          fuese auténtica la intención de la Santísima Virgen insistiría con su
          advocación.
        </p>

        <p>
          Por lo que días después, mientras Sor Magdalena hacia sus labores de
          limpieza encontró una cabecita de un ángel, que se había desprendido
          del sagrario. La tomo y la llevo a la Madre Superiora para que le
          autorizara realizar la imagen de la Divina Infantita con la cabecita
          de Ángel. Después de la insistencia de la Abadesa le concedió el
          permiso. Llamaron a un buen escultor, explicándole como era la
          aparición que ella había visto. La imagen quedó preciosa y radiante
          tal cual la había visto durante su visión.
        </p>

        <p>
          La Madre Magdalena llena de entusiasmo y de júbilo la llevó a bendecir
          y a promover el Culto Santísima Virgen Infantita, dando a conocer los
          deseos de alabanza que la Virgen Niña le había pedido a Sor Magdalena.
        </p>

        <p>
          Hizo la Divina Niña, por medio de esta primera imagen, muchos
          milagros: Entre otros, la conversión de un gran pecador y haber
          recobrado la vista, una niña ciega. Sor Magdalena, era sencilla como
          una niña y loca de amor por su Divina Infantita. Le hacia unas
          demostraciones de amor verdaderamente infantiles. Junto a su celda,
          puso otra para la niña con un letrero por fuera que decía: Celda de la
          Divina Infantita, en ella le tenía juguetes, dulces, flores, etc. Mil
          primores como si la imagen fuera una niña viva, le hacia sus novenas
          con gran solemnidad, y en su fiesta principal, su natividad
          (nacimiento de la Virgen), el 8 de septiembre.
        </p>

        <h2 className="text-center font-weight-bold mt-5">
          Cancion Virgen Niña
        </h2>
        <hr />
        <div className="row mt-5 mb-5">
          <div className="col-12 col-lg-7 m-auto embed-responsive">
            <ReactPlayer
              controls
              url="https://m.youtube.com/watch?v=zMkyhGrrXeQ"
            />
          </div>
        </div>
        <div className="text-center mb-5">
          <img src={oracion} className="oracion w-100" alt="oracion" />
        </div>
      </div>
    </Layout>
  );
};

export default VirgenNina;
