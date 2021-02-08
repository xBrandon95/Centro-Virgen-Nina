const Hero = () => {
  return (
    <header className="site-header">
      <div className="container h-100 d-flex align-items-center pt-4">
        <div className="text-center header-contenido">
          <h1 className="font-weight-bold">
            Asociación Centro <br />
            Virgen Niña <br /> <span className="epdb">EPDB</span>
          </h1>
          <p className="texto-inicial text-center text-white mt-4 d-none d-lg-block">
            Atención integral a niños y niñas con y sin discapacidad, familias
            en estado de pobreza y adultos mayores en estado de abandono.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
