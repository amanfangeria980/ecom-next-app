import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ProductResult } from "./lib/productTypings";
// import type {} from "@redux-devtools/extension";
// required for devtools typing

interface CartState {
    cart: ProductResult[];
    addToCart: (product: ProductResult) => void;
    removeFromCart: (product: ProductResult) => void;
}

const useCartStore = create<CartState>()(
    devtools(
        persist(
            (set, get) => ({
                cart: [],
                addToCart: (product) => {
                    set((state) => ({
                        cart: [...state.cart, product],
                    }));
                },
                removeFromCart: (product) => {
                    const productToRemove = get().cart.findIndex(
                        (p) => p.product_id === product.product_id
                    );
                    set((state) => {
                        const newCart = [...state.cart];
                        newCart.splice(productToRemove, 1);
                        return { cart: newCart };
                    });
                },
            }),
            {
                name: "shopping-cart-storage",
            }
        )
    )
);
