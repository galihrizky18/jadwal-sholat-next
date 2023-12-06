"use client";
import React from "react";
import { Carousel } from "@mantine/carousel";

const DoaSection = () => {
  return (
    <div className="h-full w-full ">
      <Carousel
        slideSize="100%"
        height="100%"
        slideGap="md"
        loop
        withControls={false}
        className="h-full"
      >
        <Carousel.Slide className="grid grid-cols-2 gap-10">
          <div className="caption flex flex-col justify-center gap-5 items-center font-lora text-center ">
            <div className="latin font-bold text-4xl">
              {`"Allahumma afini fi badani allahumma afini fi sam’i allahumma afini fi bashari la ilaha illa anta"`}
            </div>
            <div className="arti text-xl">
              Ya Allah, berilah kesehatan untukku pada badanku. Ya Allah,
              berilah kesehatan untukku pada pendengaranku. Ya Allah, berilah
              kesehatan untukku pada penglihatanku. Tiada sesembahan kecuali
              engkau.
            </div>
          </div>
          <div className="judul flex justify-center items-center text-7xl font-lora text-center ">
            Doa Memohon Kesembuhan
          </div>
        </Carousel.Slide>

        <Carousel.Slide className="grid grid-cols-2 gap-10">
          {/* Judul */}
          <div className="judul flex justify-center items-center text-7xl font-lora text-center ">
            Doa Pelancar Rezeki
          </div>

          {/* Surat */}
          <div className="caption flex flex-col justify-center gap-5 items-center font-lora text-center ">
            <div className="latin font-bold text-3xl">
              {`"Allaahumma rabbanaa anzil 'alainaa maa'idatam minas samaa'i takunu lana 'iidal li'awwalinaa wa aakhirinaa wa aayatam mingka warzuqnaa wa anta khairur raaziqiin"`}
            </div>
            <div className="arti text-xl">
              Ya Tuhan kami, turunkanlah kepada kami hidangan dari langit (yang
              hari turunnya) akan menjadi hari raya bagi kami, yaitu bagi
              orang-orang yang sekarang bersama kami maupun yang datang setelah
              kami, dan menjadi tanda bagi kekuasaan Engkau, berilah kami rezeki
              dan Engkaulah sebaik-baiknya pemberi rezeki.
            </div>
          </div>
        </Carousel.Slide>

        <Carousel.Slide className="grid grid-cols-2 gap-10">
          <div className="caption flex flex-col justify-center gap-5 items-center font-lora text-center ">
            <div className="latin font-bold text-4xl">
              {`"Rabbana la tuzigh qulubana ba'da idh hadaytana wa hab lana min ladunka rahma, innaka anta al-wahhab"`}
            </div>
            <div className="arti text-xl">
              Wahai Tuhanku, janganlah Engkau jadikan hati kami condong kepada
              kesesatan setelah Engkau beri petunjuk kepada kami, dan berilah
              kami rahmat dari sisi-Mu. Sesungguhnya Engkau adalah Yang Maha
              Pemberi.
            </div>
          </div>
          <div className="judul flex justify-center items-center text-7xl font-lora text-center ">
            Doa Meningkatkan Iman
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};

export default DoaSection;
