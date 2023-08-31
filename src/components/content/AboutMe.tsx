import React from "react";
import TechStackList from "./TechStackList";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div
      className="section grid h-[calc(100vh-90px)] snap-center snap-always grid-cols-6  grid-rows-6 items-center justify-center bg-[#1e1e1e] p-10 font-raleway text-white  phone:h-auto"
      id="aboutme"
    >
      <div className="relative col-span-3  row-span-6 hidden h-full items-center justify-center lg:col-span-2 lg:flex xl:col-span-3 xl:flex">
        <Image
          alt="svalbard"
          height={670}
          width={610}
          className="  object h-[600px] object-cover object-[25%_50%]"
          src="/images/projets/svalbard.jpeg"
        />
      </div>
      <div className="grid-cols col-span-6  row-span-6 grid h-full max-w-2xl  sm:col-span-6 sm:ml-0 md:col-span-6 md:ml-6 md:pl-4 lg:col-span-4 lg:ml-0 xl:col-span-3">
        <div className=" relative flex w-full max-w-3xl flex-col  justify-center ">
          <span className="relative  text-3xl text-gray-400">Léo Piras</span>
          <div className="relative  text-3xl text-white">
            <h2 className="bg-gradient-to-r from-lightBlue to-darkBlue bg-clip-text text-5xl text-transparent">
              Developpeur Web
            </h2>
          </div>
          <div className="relative  mt-4 border-l-4 border-darkBlue px-8">
            <p className=" text-lg">
              Passionné de technologie depuis mon plus jeune âge, j'ai
              transformé cette passion en une carrière en devenant développeur
              web. Mon parcours m'a permis de fusionner créativité et code pour
              donner vie à des expériences en ligne captivantes.
              <br />
              <br />
              Depuis septembre 2023, je me consacre à la réalisation de ClubKit,
              une application de gestion de club sportif, où je mets en œuvre
              mes compétences pour créer une plateforme qui simplifie et
              optimise les opérations des clubs sportifs tout en offrant une
              expérience utilisateur exceptionnelle.
            </p>
          </div>
          <TechStackList />
        </div>
      </div>
    </div>
  );
}
