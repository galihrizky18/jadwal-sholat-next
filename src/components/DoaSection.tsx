"use client";
import React from "react";
import { Carousel } from "@mantine/carousel";

const DoaSection = () => {
  return (
    <div className="h-full border border-black">
      <Carousel
        slideSize="100%"
        height="100%"
        slideGap="md"
        loop
        withControls={false}
        className="h-full"
      >
        <Carousel.Slide className=" border border-black">1</Carousel.Slide>
        <Carousel.Slide className=" border border-black">2</Carousel.Slide>
        <Carousel.Slide className=" border border-black">3</Carousel.Slide>
      </Carousel>
    </div>
  );
};

export default DoaSection;
