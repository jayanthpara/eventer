"use client"

import React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface GalleryItem {
  src: string;
  hint: string;
  tall?: boolean;
}

const galleryItems: GalleryItem[] = [
    { src: 'https://placehold.co/400x300.png', hint: 'students coding' },
    { src: 'https://placehold.co/400x500.png', hint: 'guest speaker', tall: true },
    { src: 'https://placehold.co/400x300.png', hint: 'team discussion' },
    { src: 'https://placehold.co/400x500.png', hint: 'award ceremony', tall: true },
    { src: 'https://placehold.co/400x500.png', hint: 'audience event', tall: true },
    { src: 'https://placehold.co/400x300.png', hint: 'networking students' },
    { src: 'https://placehold.co/400x500.png', hint: 'dj party', tall: true },
    { src: 'https://placehold.co/400x300.png', hint: 'fun activity' },
]

export default function AutoScrollGallery() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-4">
        {galleryItems.map((item, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
               <div className="overflow-hidden rounded-lg shadow-lg group">
                    <Image 
                        src={item.src} 
                        width={400} 
                        height={item.tall ? 500 : 300} 
                        alt={`Gallery image ${index + 1}`} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" 
                        data-ai-hint={item.hint} 
                    />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
