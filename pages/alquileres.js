import Head from 'next/head'
import RentCard from '../components/RentCard'
import API from '../db/alquiler/api'

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

export const getServerSideProps = async () => {
  // Implementar React Query

  try {
    const filters = {
      "title": "Casa en alquiler",
      "features.bedrooms": 4
    }

    const Alquileres = await API.Alquileres.fetch(filters) // /api/alquiler/filters

    return {
      props:
      {
        rents: Alquileres
      }
    }
  } catch (err) {
    console.log('err', err)
    return {
      props:
      {
        rents: []
      }
    }
  }
}