// posts will be populated at build time by getStaticProps()
function Alquileres({ posts }) {
    return (
      <ul>
        {posts.data.map((post, key) => (
            <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    )
  }
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries. See the "Technical details" section.
  export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://server:8080/posts')
    const posts = await res.json()
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }
  
  export default Alquileres