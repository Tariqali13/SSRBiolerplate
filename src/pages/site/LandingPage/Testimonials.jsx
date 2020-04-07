import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { CarouselItem } from "../../../components";

function Testimonials() {
  const [state, setState] = useState({
    index: 0,
    direction: null,
    carouselItemCount: 4
  });
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const toggleCarousel = direction => {
    let index = state.index;
    const [min, max] = [0, state.carouselItemCount - 1];

    if (direction === "next") {
      index++;
    } else if (direction === "prev") {
      index--;
    }

    if (index > max) {
      index = 0;
    }

    if (index < min) {
      index = max;
    }

    setState({
      ...state,
      direction,
      index
    });
  };
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  return (
    <section id="testimonialCarouselControls">
      <Carousel
        indicators={false}
        controls={false}
        interval={5000}
      >
        <Carousel.Item>
          <CarouselItem
            heading1="Karlos Pylaros"
            heading2="Lifestyle and Wellness Coach"
            img="testimonail-img-1.png"
            para="My income doubled in my first month of using Vonza. It gave me everything I needed to run a successful business. I don’t need multiple tools anymore. Thank you guys!"
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItem
            heading1="Doka Ugbala"
            heading2="Brightway Adult Daycare Center"
            img="testimonail-img-2.jpg"
            para="With Vonza, I have everything I need to create, build and scale my new consulting business. Vonza is a breath of fresh air. It's the best platform to grow your business."
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItem
            heading1="Marie Brunson"
            heading2=""
            img="testimonail-img-3.png"
            para="I made $4000 in 30 days after moving my online business to Vonza. So grateful for this incredible platform and the awesome team working hard for us business owners."
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItem
            heading1="Michael Frye"
            heading2="Michael Frye Enterprises"
            img="testimonail-img-4.png"
            para="Vonza makes it incredibly easy to turn your knowledge into products and courses you can sell. Within minutes i was able to set up my Vonza website with ease."
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Testimonials;
