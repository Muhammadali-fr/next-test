import Link from "next/link";

export default async function Sidebar(){

    const res = await fetch('https://jsonplaceholder.typicode.com/users').then(p => p.json());
    console.log(res);

    return (
        <div>
            {res.map((user: {id:string, name: string}) => (
               <Link key={user.id} href={`/user/${user.id}`}> <p>{user.name}</p></Link>
            ))}
        </div>
    )
}