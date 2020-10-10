import Head from 'next/head'

function Alquileres({ posts }) {
  return (
    <div className="pt-1 pb-4 max-w-xl mx-auto px-8">
      <Head>
        <title>Alquileres - MiPergamino</title>
        <meta property="og:title" content="MiPergamino" key="title" />
      </Head>
      <div className="m-auto">
        <div className="text-3xl mb-5">
          <h2>Alquileres</h2>
        </div>

        {posts.data.map((post, key) => (
          <div key={post._id} className="w-full mb-3">
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
              <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url('/img/card-left.jpg')" }} title="Woman holding a mug">
              </div>
              <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">
                    Vicente López
                  </p>
                  <div className="text-gray-900 font-bold text-xl mb-2">{post.title}</div>
                  <p className="text-gray-700 text-base">{post.description}</p>
                </div>
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" />
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:8080/posts/alquileres')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default Alquileres