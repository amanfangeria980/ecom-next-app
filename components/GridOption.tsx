import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface GridProps {
    title: string;
    className?: string;
    image?: string;
}

const GridOption = ({ title, className, image }: GridProps) => {
    return (
        <Link
            href={{
                pathname: "/search",
                query: { q: title },
            }}
            className={cn(
                "relative grid-option flex justify-center items-center",
                className
            )}
        >
            <h2 className="text-xl font-bold ">{title}</h2>
            {image && (
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    className="object-cover opacity-20 rounded-md"
                />
            )}
        </Link>
    );
};

export default GridOption;
