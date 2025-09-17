import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function App() {

  const getPosts = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/posts');
  }

  const { data: todos, isPending } = useQuery({
    queryKey: ['data'],
    queryFn: getPosts
  });

  if (isPending) {
    return 'loading ...'
  }

  console.log(todos?.data)

  return (
    <div>
      {todos?.data.map((item: { userId: number, id: number, title: string, body: string }) => (
        <div key={item.id}>
          {item.title}
        </div>
      ))}
    </div>
  )

};