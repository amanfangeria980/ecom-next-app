"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselComponentProps {
    images: string[];
    title: string;
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({
    images,
    title,
}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollTo = useCallback(
        (index: number) => {
            emblaApi && emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCurrentIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    const handlePrevious = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const handleNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="hidden lg:flex flex-col space-y-4">
                {images.map((image, i) => (
                    <div
                        key={image}
                        className={`cursor-pointer transition-all duration-300 ${
                            i === currentIndex
                                ? "border-2 border-blue-500"
                                : "border border-gray-300"
                        }`}
                        onClick={() => scrollTo(i)}
                    >
                        <Image
                            src={image}
                            alt={`${title} thumbnail ${i}`}
                            width={90}
                            height={90}
                            className="rounded-sm"
                        />
                    </div>
                ))}
            </div>
            <div className="w-3/5 mb-10 lg:mb-0 lg:w-full self-start flex items-center max-w-xl mx-auto lg:mx-20">
                <div className="relative w-full">
                    <div ref={emblaRef} className="overflow-hidden">
                        <div className="flex">
                            {images.map((image, i) => (
                                <div
                                    key={image}
                                    className="flex-[0_0_100%] min-w-0"
                                >
                                    <div className="p-1">
                                        <div className="flex items-center justify-center p-2 relative aspect-square">
                                            <Image
                                                src={image}
                                                alt={`${title} ${i}`}
                                                width={400}
                                                height={400}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Button
                        onClick={handlePrevious}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full p-2"
                        size="icon"
                        variant="outline"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full p-2"
                        size="icon"
                        variant="outline"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CarouselComponent;
