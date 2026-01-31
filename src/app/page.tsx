// "use client";
export default async function HomePage() {

  // (async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'force-cache' }).then((response) => response.json());
    console.log(res);
  // })();
  return (
    <section>
      {res.map((post: any) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </section>
  );
}