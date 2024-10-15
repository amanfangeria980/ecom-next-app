export interface ProductTypings {
    search_metadata: SearchMetadata;
    search_parameters: SearchParameters;
    search_information: SearchInformation;
    product_result: ProductResult;
    review_results: ReviewResults;
}

interface SearchMetadata {
    id: string;
    status: string;
    json_endpoint: string;
    created_at: string;
    processed_at: string;
    walmart_product_url: string;
    raw_html_file: string;
    prettify_html_file: string;
    total_time_taken: number;
}

interface SearchParameters {
    product_id: string;
    engine: string;
    device: string;
}

interface Location {
    postal_code: string;
    province_code: string;
    city: string;
    store_id: number;
}

interface SearchInformation {
    location: Location;
}

interface ReviewInformation {
    rating: string;
    count: number;
}

interface ReviewResults {
    reviews: ReviewInformation;
}

export interface ProductResult {
    us_item_id: string;
    product_id: string;
    variants: string[];
    upc: string;
    title: string;
    short_description_html: string;
    detailed_description_html: string;
    categories: Category[];
    seller_id: string;
    seller_name: string;
    specification_highlights: SpecificationHighlight[];
    product_type_id: string;
    product_type: string;
    manufacturer: string;
    product_page_url: string;
    price_map: PriceMap;
    min_quantity: number;
    max_quantity: number;
    in_stock: boolean;
    images: string[];
    reviews: number;
    rating: number;
    offer_id: string;
    offer_type: string;
    offers: Offer[];
    shipping_price: number;
    delivery_option: DeliveryOption;
    variant_swatches: VariantSwatch[];
}

interface Category {
    name: string;
    url: string;
}

interface SpecificationHighlight {
    key: string;
    value: string;
    display_name: string;
}

interface PriceMap {
    price: number;
    currency: string;
    was_price?: WasPrice; // Optional if was_price is available
}

interface WasPrice {
    price: number;
    price_string: string;
    currency_unit: string;
}

interface Offer {
    seller_id: string;
    catalog_seller_id: number;
    seller_name: string;
    seller_display_name: string;
    price: number;
}

interface DeliveryOption {
    arrival_date: number;
    display_arrival_date: string;
}

interface VariantSwatch {
    name: string;
    available_selections: AvailableSelection[];
}

interface AvailableSelection {
    id: string;
    name: string;
    swatch_image_url?: string; // Optional if not present for all variants
    products: ProductVariant[];
}

interface ProductVariant {
    product_id: string;
    serpapi_link: string;
    variants: string[];
    in_stock: boolean;
    price_map: PriceMap;
}
