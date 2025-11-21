//no change in this code
import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './Slider.css';
import image1 from '../../assets/carousel-1.webp';
import image3 from '../../assets/carousel-2.jpg';
import image2 from '../../assets/carousel-3.webp';
import image4 from '../../assets/carousel-4.jpg';

const EmblaCarousel = ({ options }) => {
  // autoplay slider with 3 sec delay
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })])
  // previous scroll button
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])
  // next scroll button
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img
              className="embla__slide__img"
              src={image1}
              alt="Slide 1"
            />
          </div>
          <div className="embla__slide">
            <img
              className="embla__slide__img"
              src={image2}
              alt="Slide 2"
            />
          </div>
          <div className="embla__slide">
            <img
              className="embla__slide__img"
              src={image3}
              alt="Slide 3"
            />
          </div>
          <div className="embla__slide">
            <img
              className="embla__slide__img"
              src={image4}
              alt="Slide 4"
            />
          </div>
        </div>
      </div>
      <div className="embla__buttons">
        <button className="embla__button embla__button--prev" onClick={scrollPrev}>
          ‹
        </button>
        <button className="embla__button embla__button--next" onClick={scrollNext}>
          ›
        </button>
      </div>
    </section>
  )
}
export default EmblaCarousel;
