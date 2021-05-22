import Head from "next/head";

import Main from "../components/Main";
import Slider from "../components/Hero";

function Home() {
  return (
    <>
      <Head>
        <title>
          Ouroboros - Головна
        </title>
      </Head>
      <Slider/>
      <Main/>
    </>
  );
}

export default Home;