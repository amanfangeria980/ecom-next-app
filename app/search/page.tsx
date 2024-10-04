import React from "react";
interface SearchProps {
    searchParams: {
        q: string;
    };
}
const page = ({ searchParams: { q } }: SearchProps) => {
    // console.log(q);
    // fetch the search results
    // const url=https://serpapi.com/search.json?api_key=4d2c51a538149136332fcdb3aa8e0050b872e8ced875e24b19310a061561b75c&engine=walmart&query=Coffee
    return <div>Search Page</div>;
};

export default page;
