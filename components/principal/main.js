import Card from "./card";

const Main = () => {
  const programas = [
    {
      titulo: "Virgen Niña",
      enlace: "/virgen-nina",
      img: "/images/virgen/01_virgen.jpeg",
    },
    {
      titulo: "Equipo Multidisciplinario",
      enlace: "/equipo-multidisciplinario",
      img: "/images/EqMultidisciplinario/0_EqMult.jpg",
    },
    {
      titulo: "Escuela de Educación Especial",
      enlace: "/escuela-especial",
      img: "/images/EscuelaEspecial/especial.jpg",
    },
    {
      titulo: "Esc. Inicial en Familia Comunitaria",
      enlace: "/escuela-inicial",
      img: "/images/EscuelaInicial/0_inicial.jpg",
    },
    {
      titulo: "Desarrollo Infantil",
      enlace: "/desarrollo-infantil",
      img: "/images/DesInfantil/Manitos2.jpg",
    },
    {
      titulo: "Asistencia Social",
      enlace: "/asistencia-social",
      img: "/images/AsistSocial/social.jpg",
    },
  ];

  return (
    <main className="container">
      <h2 className="text-center font-weight-bold mt-4 mb-5">
        "Por una vida digna, toda la vida"
      </h2>

      <div className="row">
        {programas.map((programa, i) => (
          <Card
            key={i}
            titulo={programa.titulo}
            enlace={programa.enlace}
            img={programa.img}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
