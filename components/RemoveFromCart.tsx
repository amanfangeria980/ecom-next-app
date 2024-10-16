"use client";
import { ProductResult } from "@/lib/productTypings";
import { useCartStore } from "@/store";
import React from "react";
import { Button } from "./ui/button";

const RemoveFromCart = ({ product }: { product: ProductResult }) => {
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const handleRemove = () => {
        console.log("removing from cart", product.product_id);
        removeFromCart(product);
    };
    return (
        <Button className="bg-ecom hover:bg-ecom/50" onClick={handleRemove}>
            -
        </Button>
    );
};

export default RemoveFromCart;
