import Head from 'next/head'
import ExtravioCard from '../components/ExtravioCard'
import API from '../db/extravio/api'

export default function Extravios({ extravios }) {
  return (
    <div className="mx-auto">
      <Head>
        <title>Extravíos - MiPergamino</title>
        <meta property="og:title" content="MiPergamino" key="title" />
      </Head>
      <div className="m-auto">
        <div className="text-3xl mb-5">
          <h2>Extravíos</h2>
        </div>

        {extravios.map((extravio) => (
          <ExtravioCard extravio={extravio} key={extravio._id} />
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  try {
    const Extravios = await API.Extravios.fetch()

    return {
      props:
      {
        extravios: Extravios
      }
    }
  } catch (err) {
    console.log('err', err)
    return {
      props:
      {
        extravios: []
      }
    }
  }
}