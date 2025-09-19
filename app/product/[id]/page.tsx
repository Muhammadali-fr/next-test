"use client"

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"

export default function page() {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams()

    useEffect(() => {
        const getApi = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
                setProducts(res.data);
            } catch (error) {
                console.log(error);
            } finally{
                setLoading(false)
            }
        }

        getApi()
    }, [id])

    return (
        <div>
            {loading ? "loading" : products.body}
        </div>
    )
}