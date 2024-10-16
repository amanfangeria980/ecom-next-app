import { ProductTypings } from "./productTypings";

async function fetchProduct(id: string) {
    try {
        const key = process.env.SERP_API_KEY;
        const newUrl = new URL(
            `https://serpapi.com/search.json?api_key=${key}&engine=walmart_product&product_id=${id}`
        );
        // const newUrl = "http://localhost:3002/data";
        const res = await fetch(newUrl, {
            next: {
                revalidate: 60 * 60,
            },
        });
        if (!res.ok) throw new Error(`Error: ${res.statusText}`);
        const json = await res.json();
        const data: ProductTypings = json;
        return data;
    } catch (err) {
        console.error("Some error occured");
        throw err;
    }
}

export default fetchProduct;
