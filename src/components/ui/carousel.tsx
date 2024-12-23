import * as React from 'react';

import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
  onSlideChange?: (index: number) => void;
  mouseTracking?: boolean;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  currentSlide: number;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel(): CarouselContextProps {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins = [],
      className,
      children,
      onSlideChange,
      mouseTracking = true,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      [...(mouseTracking ? [WheelGesturesPlugin()] : []), ...plugins],
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const onSelect = React.useCallback(
      (api: CarouselApi) => {
        if (!api) {
          return;
        }

        setCurrentSlide(api.selectedScrollSnap());
        onSlideChange?.(api.selectedScrollSnap());
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
      },
      [onSlideChange],
    );

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on('reInit', onSelect);
      api.on('select', onSelect);
      api.on('slidesChanged', onSelect);

      return (): void => {
        api.off('select', onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          currentSlide,
        }}
      >
        <div
          ref={ref}
          className={cn('relative', className)}
          role='region'
          aria-roledescription='carousel'
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);

Carousel.displayName = 'Carousel';

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { innerClassName?: string }
>(({ className, innerClassName, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className={cn('overflow-hidden', innerClassName)}>
      <div
        ref={ref}
        className={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)}
        {...props}
      />
    </div>
  );
});

CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role='group'
        aria-roledescription='slide'
        className={cn(
          'min-w-0 shrink-0 grow-0 basis-full',
          orientation === 'horizontal' ? 'pl-4' : 'pt-4',
          className,
        )}
        {...props}
      />
    );
  },
);

CarouselItem.displayName = 'CarouselItem';

const CarouselDots = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { api, currentSlide } = useCarousel();

    return (
      <div
        ref={ref}
        className={cn('flex flex-wrap justify-center items-center gap-2', className)}
        {...props}
      >
        {api?.slideNodes().map((_, index) => (
          <Button
            key={index}
            size='icon'
            className={cn(
              'h-2 w-2 border-none shadow-none outline-none rounded-full hover:bg-white',
              currentSlide === index ? 'bg-white' : 'bg-gray-300',
            )}
            onClick={() => api?.scrollTo(index)}
          >
            <span className='sr-only'>Go to slide {index + 1}</span>
          </Button>
        ))}
      </div>
    );
  },
);

CarouselDots.displayName = 'CarouselDots';

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          'absolute h-8 w-8 z-10 rounded-full shadow-round-shadow border-none text-stone-300',
          orientation === 'horizontal' ? '-top-5 sm:!left-0 sm:!top-20' : '',
          canScrollPrev ? '' : 'bg-zinc-100 text-stone-300',
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ChevronLeft className='h-8 w-8' />
        <span className='sr-only'>Previous slide</span>
      </Button>
    );
  },
);

CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          'absolute h-8 w-8 z-10 rounded-full shadow-round-shadow border-none text-stone-300',
          orientation === 'horizontal' ? '-top-5 left-24 sm:right-0 sm:left-auto sm:!top-20' : '',
          canScrollNext ? '' : 'bg-zinc-100 text-stone-300',
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ChevronRight className='h-8 w-8' />
        <span className='sr-only'>Next slide</span>
      </Button>
    );
  },
);

CarouselNext.displayName = 'CarouselNext';

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
};
