"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const router = useRouter();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchInput) {
            const formattedQuery = searchInput.replace(/\s+/g, "+");
            router.push(`/search?q=${formattedQuery}`);
        }
    };
    return (
        <form
            className="flex items-center bg-white rounded-full w-full flex-1"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Search Everything..."
                className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm text-black"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit">
                <Search className="h-10 rounded-full px-2 w-10 bg-yellow-400 " />
            </button>
        </form>
    );
};

export default SearchBar;
