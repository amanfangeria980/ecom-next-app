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
    return (
        <Link
            href={{
                pathname: "/product",
                query: { url: product.product_page_url },
            }}
            className="flex flex-col relative border rounded-md h-full p-5"
        >
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
                    {product.rating}*
                    <span className="text-gray-400 ml-2">
                        ({product.reviews})
                    </span>
                </p>
            )}
        </Link>
    );
};

export default Product;
