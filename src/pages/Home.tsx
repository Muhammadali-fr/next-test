import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from "axios"


export default function Home() {

    const [product, setProduct] = useState({});
    const [loader, setLoader] = useState(true);

    const { id } = useParams()

    useEffect(() => {
        const Api = async () => {
            try {
                setLoader(true)
                const res = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
                setProduct(res.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoader(false);
            }
        }

        Api()
    }, [id]);

    if (loader) {
        return <h2>Loading ...</h2>
    }

    return (
        <div>
            <p>{product.body}</p>
        </div>
    )
}