import Head from 'next/head'
import RentCard from '../components/RentCard'

export default function Alquileres({ rents }) {
  return (
    <div className="mx-auto">
      <Head>
        <title>Alquileres - MiPergamino</title>
        <meta property="og:title" content="MiPergamino" key="title" />
      </Head>
      <div className="m-auto">
        <div className="text-3xl mb-5">
          <h2>Alquileres</h2>
        </div>

        {rents.map((rent) => (
          <RentCard rent={rent} key={rent._id} />
        ))}
      </div>
    </div>
  )
}

Alquileres.getInitialProps = async () => {
  // getStaticProps para cuando la data no cambia constantemente. Se puede setear cada 1 hora.
  // Alquiler.find({ "deleted": { $eq: false } }, function (err, result) {
  //   if (err) return res.status(400).send(err.message);

  //   res.status(200).send(result);
  // });

  const res = await fetch(`${process.env.URL}/alquileres`)
  const rents = await res.json()

  return { rents }
}