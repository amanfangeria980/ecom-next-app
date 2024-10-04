export interface SearchResult {
    search_metadata: Metadata;
    search_information: SearchInformation;
    organic_results: ProductInformation[];
    serpapi_pagination: Pagination;
}

// Metadata Interface
interface Metadata {
    id: string;
    status: string;
    json_endpoint: string;
    created_at: string;
    processed_at: string;
    walmart_url: string;
    raw_html_file: string;
    prettify_html_file: string;
    total_time_taken: number;
}

// Search Information Interface
interface SearchInformation {
    query_displayed: string;
    total_results: number;
    location: Location;
    organic_results_state: string;
}

// Location Interface
interface Location {
    postal_code: string;
    province_code: string;
    city: string;
    store_id: string;
}

// Product Information Interface
export interface ProductInformation {
    us_item_id: string;
    product_id: string;
    title: string;
    thumbnail: string;
    rating: number;
    reviews: number;
    seller_id: string;
    seller_name: string;
    two_day_shipping: boolean;
    free_shipping: boolean;
    free_shipping_with_walmart_plus: boolean;
    out_of_stock: boolean;
    sponsored: boolean;
    muliple_options_available: boolean;
    primary_offer: PrimaryOffer;
    price_per_unit: UnitPrice;
    product_page_url: string;
    serpapi_product_page_url: string;
}

// Primary Offer Interface
interface PrimaryOffer {
    offer_id: string;
    offer_price: number;
    min_price: number;
}

// Unit Price Interface
interface UnitPrice {
    unit: string;
    amount: string;
}

// Pagination Interface
interface Pagination {
    current: number;
    next_link?: string;
    next?: string;
    other_pages: Record<number, string>;
}
