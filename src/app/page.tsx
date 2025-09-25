import { allProducts } from "@/api/products"

export default async function page(){

  const res = await allProducts();
  console.log(res);

  return (
    <div>
      {res.map((item) => (
        <p>{item.id}</p>
      ))}
    </div>
  )
}