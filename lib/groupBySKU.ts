import { ProductResult } from "./productTypings";

export function groupBySKU(
    products: ProductResult[]
): Record<string, ProductResult[]> {
    return products?.reduce(
        (acc: Record<string, ProductResult[]>, product: ProductResult) => {
            const sku = product.product_id;
            if (!acc[sku]) {
                acc[sku] = [];
            }
            acc[sku].push(product);
            return acc;
        },
        {}
    );
}
