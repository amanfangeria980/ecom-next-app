"use client";
import React from "react";
import { ProductResult } from "@/lib/productTypings";
import { useCartStore } from "@/store";
import { Button } from "./ui/button";
import RemoveFromCart from "./RemoveFromCart";

const AddToCart = ({ product }: { product: ProductResult }) => {
    const addToCart = useCartStore((state) => state.addToCart);
    const howManyInCart = useCartStore(
        (state) =>
            state.cart.filter((item) => item.product_id === product.product_id)
                .length
    );

    const handleAdd = () => {
        console.log("Adding to cart", product.product_id);
        addToCart(product);
    };
    if (howManyInCart > 0) {
        return (
            <div className="flex space-x-5 items-center">
                <RemoveFromCart product={product} />
                <span>{howManyInCart}</span>
                <Button
                    className="bg-ecom hover:bg-ecom/50"
                    onClick={handleAdd}
                >
                    +
                </Button>
            </div>
        );
    }

    return (
        <Button className="bg-ecom hover:bg-ecom/50" onClick={handleAdd}>
            Add to Cart
        </Button>
    );
};

export default AddToCart;
