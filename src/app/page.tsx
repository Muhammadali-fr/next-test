// next 
import Link from "next/link";

// types 
import { Products } from "@/types/product";

export default async function Home() {

  const res = await fetch('http://localhost:8000/product', {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error('Mahsulotlarni olib kelishda xato');
  }

  const products:Products[] = await res.json();

  return (
    <div>
      {
        products.map((product: Products) => (
          <li key={product.id}>
            <Link href={`product/${product.id}`}>
              <p>{product.name}</p>
            </Link>
          </li>
        ))
      }
    </div>
  );
}
