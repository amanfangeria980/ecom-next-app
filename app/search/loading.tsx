import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-2">Searching Results...</h1>
            <h2 className="mb-5 text-gray-500">We won&apos;t be long</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {Array.from({ length: 8 }).map((_, index) => (
                    <Skeleton
                        key={index}
                        className="w-[300px] h-[400px] rounded-md animate-pulse bg-gray-200"
                    />
                ))}
            </div>
        </div>
    );
};

export default loading;
