import { ProductInformation } from "@/types";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
    product: ProductInformation;
}

const Product = ({ product }: Props) => {
    console.log(product);

    const productContent = (
        <>
            <Image
                src={product.thumbnail}
                alt={product.title}
                height={200}
                width={200}
            />
            <p className="text-xl font-bold">
                ${product.primary_offer?.offer_price}
            </p>
            {product?.sponsored && (
                <Badge className="absolute top-2 right-2">Hot🔥</Badge>
            )}
            <p className="font-light">{product.title}</p>

            {product.rating && (
                <p className="text-yellow-500">
                    {product.rating}
                    <span className="text-gray-400 ml-2">
                        ({product.reviews})
                    </span>
                </p>
            )}
        </>
    );

    return product.out_of_stock ? (
        <div className="flex flex-col relative border rounded-md h-full p-5 opacity-50 cursor-not-allowed">
            {productContent}
            <p className="text-red-500">Out of Stock</p>
        </div>
    ) : (
        <Link
            href={{
                pathname: "/product",
                query: { url: product.product_page_url },
            }}
            className="flex flex-col relative border rounded-md h-full p-5"
        >
            {productContent}
        </Link>
    );
};

export default Product;
