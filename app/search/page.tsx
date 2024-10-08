import Product from "@/components/Product";
import fetchSearch from "@/lib/fetchSearch";
import { ProductInformation } from "@/lib/searchTypings";
import React from "react";
interface SearchProps {
    searchParams: {
        q: string;
    };
}
const page = async ({ searchParams: { q } }: SearchProps) => {
    // console.log(q);
    // fetch the search results
    const result = await fetchSearch(q);
    // console.log(result);
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-2">Results for {q}</h1>
            <h2 className="mb-5 text-gray-400">
                ({result?.search_information?.total_results} results)
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {result?.organic_results?.map((product: ProductInformation) => (
                    <li key={product.product_id}>
                        <Product product={product} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default page;
