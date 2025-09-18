import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

type Product = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export default function Home() {
    const { id } = useParams<{id:string}>();

    if(!id){
        return <p>id yoq ekan</p>
    }

    const getProduct = async (id: string) => {
        let { data } = await axios.get<Product>(`https://jsonplaceholder.typicode.com/comments/${id}`)
        return data;
    };

    const {data, isPending} = useQuery({
        queryKey: [id],
        queryFn: () => getProduct(id),
    })

    console.log(data)

    // const { id } = useParams();
    // const [product, setProduct] = useState<Product | null>(null);
    // const [loader, setLoader] = useState(true);

    // useEffect(() => {
    //     const Api = async () => {
    //         try {
    //             setLoader(true)
    //             const res = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
    //             setProduct(res.data);
    //         } catch (error) {
    //             console.log(error);
    //         } finally {
    //             setLoader(false);
    //         }
    //     }

    //     Api()
    // }, [id]);

    if(isPending){
        return (
            <p>loading ...</p>
        )
    }

    if(!data){
        return (
            <p>data yoq</p>
        )
    }

    return (
        <div>
            <p>{data.name}</p>
        </div>
    )
}