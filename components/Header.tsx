"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Grid2X2, Heart, LayoutGrid, ShoppingCart, User } from "lucide-react";
import SearchBar from "./SearchBar";
import { useCartStore } from "@/store";
import getCartTotal from "@/lib/getCartTotal";
const Header = () => {
    const cart = useCartStore((state) => state.cart);
    const total = getCartTotal(cart);
    return (
        <header className="flex flex-col md:flex-row bg-ecom px-10 py-7 space-x-5 items-center">
            <Link href={"/"} className="mb-5 md:mb-0">
                <Image
                    src="https://i.imgur.com/5V4wehM.png"
                    alt="Logo"
                    width={150}
                    height={150}
                />
            </Link>
            <SearchBar />

            <div className="flex mt-5 md:mt-0 space-x-5">
                <Link
                    href={"/"}
                    className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
                >
                    <Grid2X2 size={20} />
                    <p>Departments</p>
                </Link>
                <Link
                    href={"/"}
                    className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
                >
                    <LayoutGrid size={20} />
                    <p>Services</p>
                </Link>
                <Link
                    href={"/"}
                    className="flex text-white font-bold items-center space-x-2 text-sm"
                >
                    <Heart size={20} />
                    <div>
                        <p className="text-xs font-extralight">Reorder</p>
                        <p>My Items</p>
                    </div>
                </Link>
                <Link
                    href={"/"}
                    className="flex text-white font-bold items-center space-x-2 text-sm"
                >
                    <User size={20} />
                    <div>
                        <p className="text-xs font-extralight">Sign In</p>
                        <p>Account</p>
                    </div>
                </Link>
                <Link
                    href={"/basket"}
                    className="flex text-white font-bold items-center space-x-2 text-sm"
                >
                    <ShoppingCart size={20} />
                    <div>
                        <p className="text-xs font-extralight">
                            {cart.length > 0
                                ? `${cart.length} items`
                                : "No Items"}
                        </p>
                        <p>{total} </p>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;
