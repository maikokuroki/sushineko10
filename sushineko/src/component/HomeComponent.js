import React,{ useState } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container,
    Row,
    Col
  } from 'reactstrap';



const items = [
    {
      src: '/assets/images/torosalmon.jpg',
      altText: 'TORO SALMON',
      caption: 'Fatty salmon sushi'
    },
    {
      src: '/assets/images/honolulu.jpg',
      altText: 'Inside out roll with fake crub and avocado on top.',
      caption: 'HONOLULU green wave'
    },
    {
      src: '/assets/images/chirashi.jpg',
      altText: 'Variety of sashimi over sushi-rice bedding.',
      caption: 'Chirashi box'
    }
  ];
  
  const Home = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} width='700' height='500' className='align-item-center img-thumbnail mx-auto d-block'/>
          <CarouselCaption id="carouselCaption" captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
        <Container>
            <Row>
                <Col md={5} className="mx-auto d-block">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      </Col>
            </Row>
      </Container>
    );
  }




export default Home;