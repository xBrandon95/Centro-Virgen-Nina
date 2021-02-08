import "bootswatch/dist/flatly/bootstrap.min.css";
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Centro Virgen Niña</title>
        <link rel="shortcut icon" href="/logo.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Asociacion Centro Virgen Niña brinda atención integral a niños y niñas con y sin discapacidad, familias en estado de pobreza y adultos mayores en estado de abandono."
        />
        <meta
          name="keywords"
          content="Virgen, Niña, atención integral,  niños, discapacidad, pobreza, abandono"
        ></meta>
      </Head>
      <Navbar />
      <div>{children}</div>
      <Footer />
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
        integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default Layout;
