import Head from 'next/head'
import NavBar from '../components/common/NavBar'
import Greetings from '../components/home/Greetings'
import Biography from '../components/home/Biography'
import Music from '../components/home/Music'
import Calendar from '../components/home/Calendar'
import Multimedia from '../components/home/Multimedia'
import Contact from '../components/home/Contact'
import Store from '../components/home/Store'
import { GraphQLClient } from "graphql-request";
import { integrantesGQL, discosGQL } from "../components/queries/graphqlQueries";

export async function getStaticProps() {

  const graphcms = new GraphQLClient(
    "https://api-us-east-1.graphcms.com/v2/ckvk8b9lu68mc01z09pun1ugy/master"
  );
  const { integrantes } = await graphcms.request(
    integrantesGQL
  );

  const { discos } = await graphcms.request(
    discosGQL
  );

  return {
    props: {
      integrantes,
      discos
    },
  };
}
export default function Home({ integrantes, discos }) {
  return (
    <>
      <Head>
        <title>Niña Lobo</title>
        <meta name="title" content="Niña Lobo" />
        <meta name="description" content="Niña Lobo es una jauría de lobas, un quinteto de indie-alternativo en Montevideo, Uruguay." />


        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Niña Lobo" />
        <meta property="og:description" content="Niña Lobo es una jauría de lobas, un quinteto de indie-alternativo en Montevideo, Uruguay." />
        <meta property="og:image" content="https://imgur.com/opPPUF6.jpg" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Niña Lobo" />
        <meta property="twitter:description" content="Niña Lobo es una jauría de lobas, un quinteto de indie-alternativo en Montevideo, Uruguay." />
        <meta property="twitter:image" content="https://imgur.com/opPPUF6.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <div className="container">

        <main>
          <Greetings />
          <Music discos={discos} />
          <Biography integrantes={integrantes} />

          <Calendar />
          <Multimedia />
          <Store />
          <Contact />

        </main>
      </div>
    </>
  )
}
