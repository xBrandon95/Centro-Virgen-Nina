import Layout from "../components/layout/Layout";
import Hero from "../components/principal/hero";
import Main from "../components/principal/main";
import Info from "../components/principal/info";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Main />
        <section className="anuncio mb-4"></section>
        <Info />
      </Layout>
    </>
  );
}
