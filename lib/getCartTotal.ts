import { ProductResult } from "./productTypings";

export default function getCartTotal(products: ProductResult[]): string {
    const total = products.reduce(
        (acc: number, product: ProductResult) => acc + product.price_map.price,
        0
    );
    if (products.length) {
        return `${products[0]?.price_map.currency} ${total.toFixed(2)}`;
    }
    return `USD 0.00`;
}
