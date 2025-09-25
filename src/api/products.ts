import { fetcher } from "./fetcher";

export async function allProducts(){
    return fetcher('http://localhost:8000/product');
}