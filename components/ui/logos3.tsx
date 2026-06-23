"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these companies",
  logos = [],
}: Logos3Props) => {
  return (
    <section className="relative py-16 bg-[#050505] border-y border-revy-border/40 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <h2 className="text-revy-text-secondary text-sm font-semibold tracking-widest uppercase">
          {heading}
        </h2>
      </div>
      <div className="w-full">
        <div className="relative mx-auto flex items-center justify-center w-full">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              AutoScroll({ 
                playOnInit: true,
                speed: 1.2,
                stopOnInteraction: false,
                stopOnMouseEnter: true
              })
            ]}
            className="w-full"
          >
            <CarouselContent className="ml-0 flex items-center">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 shrink-0"
                >
                  <div className="mx-8 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* Soft edge gradient masks (glass fade out at margins) */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
export type { Logo, Logos3Props };
