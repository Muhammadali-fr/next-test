import axios from "axios";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function Home() {

  const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  console.log(data);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <strong>{item.body}</strong>
        </div>
      ))}
    </div>
  );
}
