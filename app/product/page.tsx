// import fetchProduct from "@/lib/fetchProduct";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel";
// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";

// interface Props {
//     searchParams: {
//         id: string;
//     };
// }

// const page = async ({ searchParams: { id } }: Props) => {
//     const product = await fetchProduct(id);
//     if (!product) return notFound();
//     const { product_result } = product;
//     return (
//         <div className="p-4 lg:p-10 flex flex-col lg:flex-row w-full">
//             <div className="hidden lg:inline space-y-4">
//                 {product_result.images.map((image, i) => (
//                     <Image
//                         key={image}
//                         src={image}
//                         alt={product.product_result.title + " " + i}
//                         width={90}
//                         height={90}
//                         className="border rounded-sm"
//                     />
//                 ))}
//             </div>
//             <Carousel
//                 opts={{
//                     loop: true,
//                 }}
//                 className="w-3/5 mb-10 lg:mb-0 lg:w-full self-start flex items-center max-w-xl mx-auto lg:mx-20"
//             >
//                 <CarouselContent>
//                     {product_result.images.map((image, i) => (
//                         <CarouselItem key={image}>
//                             <div className="p-1">
//                                 <div className="flex items-center justify-center p-2 relative aspect-square">
//                                     <Image
//                                         key={image}
//                                         src={image}
//                                         alt={product_result.title + " " + i}
//                                         width={400}
//                                         height={400}
//                                     />
//                                 </div>
//                             </div>
//                         </CarouselItem>
//                     ))}
//                 </CarouselContent>
//                 <CarouselPrevious />
//                 <CarouselNext />
//             </Carousel>
//             <div className="flex-1 border rounded-md w-full p-5 space-y-5">
//                 <h1 className="text-3xl font-bold">{product_result.title}</h1>
//                 <div className="space-x-2">
//                     {product_result.categories.map((category, i) => (
//                         <Badge key={category.name + i} variant={"outline"}>
//                             {category.name}
//                         </Badge>
//                     ))}
//                 </div>
//                 <div className="py-5 space-y-2">
//                     <div
//                         dangerouslySetInnerHTML={{
//                             __html: product_result.short_description_html,
//                         }}
//                     />
//                     <div>
//                         <p>Features:</p>
//                         <div
//                             dangerouslySetInnerHTML={{
//                                 __html: product_result.detailed_description_html,
//                             }}
//                         />
//                     </div>
//                 </div>

//                 {product_result.rating && (
//                     <p className="text-yellow-500 text-sm">
//                         {product_result.rating.toFixed(1)} *
//                         <span className="text-gray-400 ml-2">
//                             ({product_result.reviews} reviews)
//                         </span>
//                     </p>
//                 )}
//                 <p className="text-2xl font-bold mt-2">
//                     {product_result?.price_map.currency}{" "}
//                     {product_result.price_map.price}
//                 </p>
//                 {/* add to cart button */}
//                 <div className="h-px bg-gray-300 my-2"></div>
//                 <h3 className="font-bold text-xl pt-10">Specifications</h3>

//                 <Table>
//                     <TableHeader>
//                         <TableRow>
//                             <TableHead>Specification</TableHead>
//                             <TableHead>Value</TableHead>
//                         </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                         {product_result.specification_highlights.map((spec) => (
//                             <TableRow key={spec.key}>
//                                 <TableCell className="font-bold">
//                                     {spec.key}
//                                 </TableCell>
//                                 <TableCell>{spec.value}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </div>
//         </div>
//     );
// };

// export default page;

import { notFound } from "next/navigation";
import fetchProduct from "@/lib/fetchProduct";
import CarouselComponent from "../../components/carouselComponent";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface Props {
    searchParams: {
        id: string;
    };
}

const page = async ({ searchParams: { id } }: Props) => {
    const product = await fetchProduct(id);
    if (!product) return notFound();
    const { product_result } = product;

    return (
        <div className="p-4 lg:p-10 flex flex-col lg:flex-row w-full">
            <CarouselComponent
                images={product_result.images}
                title={product_result.title}
            />
            <div className="flex-1 border rounded-md w-full p-5 space-y-5">
                <h1 className="text-3xl font-bold">{product_result.title}</h1>
                <div className="space-x-2">
                    {product_result.categories.map((category, i) => (
                        <Badge key={category.name + i} variant="outline">
                            {category.name}
                        </Badge>
                    ))}
                </div>
                <div className="py-5 space-y-2">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: product_result.short_description_html,
                        }}
                    />
                    <div>
                        <p>Features:</p>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: product_result.detailed_description_html,
                            }}
                        />
                    </div>
                </div>

                {product_result.rating && (
                    <p className="text-yellow-500 text-sm">
                        {product_result.rating.toFixed(1)} *
                        <span className="text-gray-400 ml-2">
                            ({product_result.reviews} reviews)
                        </span>
                    </p>
                )}
                <p className="text-2xl font-bold mt-2">
                    {product_result?.price_map.currency}{" "}
                    {product_result.price_map.price}
                </p>
                <div className="h-px bg-gray-300 my-2"></div>
                <h3 className="font-bold text-xl pt-10">Specifications</h3>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Specification</TableHead>
                            <TableHead>Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {product_result.specification_highlights.map((spec) => (
                            <TableRow key={spec.key}>
                                <TableCell className="font-bold">
                                    {spec.key}
                                </TableCell>
                                <TableCell>{spec.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default page;
