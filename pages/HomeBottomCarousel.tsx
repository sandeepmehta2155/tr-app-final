/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeScene from "./Home";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const handleDragStart = (e: any) => e.preventDefault();
const Item = ({ image, title }: any) => (
  <>
    <img
      onDragStart={handleDragStart}
      role="presentation"
      src={image}
      alt={title}
    />
    <div
      style={{ color: "white", backgroundColor: "black", padding: "1rem" }}
      className="text-center"
    >
      <strong>{title}</strong>
    </div>
  </>
);

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        padding: "1rem",
        width: "3.2rem",
        height: "3.2rem",
        textAlign: "center",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: 10,
        background: "black",
        padding: "1rem",
        width: "3.2rem",
        height: "3.2rem",
      }}
      onClick={onClick}
    />
  );
}

const HomeBottomCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        <Item
          title="CAREER GUIDELINES"
          image="https://trivediravi.com/wp-content/uploads/2020/04/career-home.png"
        />
        <Item
          title="HOROSCOPE"
          image="https://trivediravi.com/wp-content/uploads/2020/04/horoscope-home.png"
        />
        <Item
          title="CORPORATE ASTRO VASTU"
          image="https://trivediravi.com/wp-content/uploads/2020/04/office-vastu-home.png"
        />
        <Item
          title="NUMEROLOGY"
          image="https://trivediravi.com/wp-content/uploads/2020/04/numerology-home.png"
        />
        <Item
          title="COMMERCIAL VASTU"
          image="https://trivediravi.com/wp-content/uploads/2020/04/vastu-home.png"
        />
      </Slider>
    </>
  );
};

export default HomeBottomCarousel;
