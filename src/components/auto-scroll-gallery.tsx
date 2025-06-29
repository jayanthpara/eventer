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
    { src: 'https://i.ibb.co/Y7sBVbqw/Innovation-2.png', hint: 'students coding' },
    { src: 'https://i.ibb.co/fV5g1TPZ/IMG-1313-3.jpg', hint: 'guest speaker', tall: true },
    { src: 'https://i.ibb.co/yBR80BWt/IMG-1310.jpg', hint: 'team discussion' },
    { src: 'https://i.ibb.co/TxGpTs3t/20241201-051248.jpg', hint: 'award ceremony', tall: true },
    { src: 'https://i.ibb.co/ymcwr3G9/IMG-0082.jpg', hint: 'audience event', tall: true },
    { src: 'https://i.ibb.co/27CFNhqH/IMG-0042.jpg', hint: 'networking students' },
    { src: 'https://i.ibb.co/zhZ94c6R/IMG-8935.jpg', hint: 'dj party', tall: true },
    { src: 'https://i.ibb.co/RG99w7NZ/IMG-8702.jpg', hint: 'fun activity' },
    { src: 'https://i.ibb.co/v4BZShss/IMG-8781-1.jpg', hint: 'fun activity' },
    { src: 'https://i.ibb.co/Z1bLd3x0/IMG-3911.jpg', hint: 'fun activity' },
    { src: 'https://i.ibb.co/Cswh3W3m/IMG20250427044658.jpg', hint: 'fun activity' },
    { src: 'https://i.ibb.co/LhzpfVKL/IMG20250427094219.jpg', hint: 'fun activity' },
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
