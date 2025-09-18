import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";



export default function Sidebar() {

    const [array, setArray] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const Api = async () => {
            try {
                setLoader(true)
                const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
                setArray(res.data);
                console.log(array);

            } catch (error) {
                console.log(error);
            } finally {
                setLoader(false);
            }
        }

        Api()
    }, []);

    return (
        <div className="w-70 h-screen sticky top-0 left-0 border-r p-3 flex flex-col justify-start gap-3">
            {loader ? (
                <p>Loading ...</p>
            ) : (
                array.length !== 0 &&
                array.map((i: { postId: number, id: number, name: string, email: string, body: string }, index) => (
                    <div className="flex flex-col justify-start gap-3" key={index}>
                        <Link to={`home/${i.id}`}>
                            <button className="border py-2 px-5">
                                {loader ? "Loading.." : i.id}
                            </button>
                        </Link>
                    </div>
                ))
            )}

        </div>
    )
}