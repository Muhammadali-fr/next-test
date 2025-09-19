"use client"

import axios from "axios"
import Link from "next/link";
import { useEffect, useState } from "react"

export default function Sidebar() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getApi = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
                setProducts(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        getApi()
    }, []);

    return (
        <div className="w-80 h-screen border-r sticky top-0 left-0 p-5">
            <div className="w-full h-full flex flex-col gap-3">
                {products.map((i) => (
                    <Link href={`/product/${i.id}`} key={i.id}>
                        <button  className="py-2 px-4 border">{i.id}</button>
                    </Link>
                ))}
            </div>
        </div>
    )
}