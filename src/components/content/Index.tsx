import React from "react";
import Image from "next/image";

export default function Index() {
  return (
    <div
      id="index"
      className="section box-border  flex h-[calc(100vh-90px)] w-full snap-center snap-always bg-[#1e1e1e] font-raleway  text-white phone:items-center phone:justify-center phone:px-4 phone:pt-4 tablet:h-auto"
    >
      <div className="flex w-full items-center justify-center gap-8 tablet:mt-7">
        <div className=" flex  w-[600px] flex-col font-sans font-bold text-white 2xl:pr-14 phone:w-full ">
          <span className="text-xl text-lightBlue phone:text-center phone:text-base">
            Bienvenue sur mon portfolio.
          </span>
          <p className=" text-[50px] tracking-tighter phone:text-center phone:text-[35px]">
            <span className="phone:hidden"> Je suis </span>
            <span className="m-0 p-0 text-left phone:w-full phone:text-center">
              <span className="bg-gradient-to-r from-lightBlue to-darkBlue bg-clip-text text-[70px] text-transparent   phone:text-center phone:text-[55px]">
                Léo Piras.
                <br />
              </span>
            </span>
            <span className="w-full">
              Développeur <br className="tablet:hidden desktop:hidden" /> Full
              Stack
            </span>
          </p>

          <div className="mt-8 flex font-normal text-[lightBlue] phone:grid phone:grid-cols-2">
            <div className="flex justify-center">
              <span className="mr-5 flex items-center gap-2 text-xl">
                React
                <Image
                  src={"/icons/react.svg"}
                  width={0}
                  height={0}
                  alt="react logo"
                  className="h-9 w-auto"
                />
              </span>
            </div>
            <div className="flex justify-center">
              <span className="mr-5 flex items-center gap-2 text-xl">
                Tailwind
                <Image
                  src={"/icons/tailwindcss.svg"}
                  alt="tailwind logo"
                  height={0}
                  width={0}
                  className="h-6 w-auto"
                />
              </span>
            </div>
            <div className="flex justify-center">
              <span className="mr-5 flex items-center gap-2 text-xl">
                TypeScript
                <Image
                  src={"/icons/typescript.svg"}
                  width={0}
                  height={0}
                  alt="TypeScript"
                  className="h-9 w-auto"
                />
              </span>
            </div>
            <div className="flex justify-center">
              <span className="mr-5 flex items-center gap-2 text-xl">
                NodeJs
                <Image
                  width={0}
                  height={0}
                  alt="nodejs logo"
                  src={"icons/node.svg"}
                  className="h-9 w-auto"
                />
              </span>
            </div>
          </div>
          <p className="text-md tablet:text mt-8  text-justify text-gray-400 ">
            Bienvenue dans mon portfolio dédié au développement web, un espace
            où l'expertise technique et la créativité harmonisent leurs forces
            pour créer des solutions numériques de qualité supérieure. Mon
            engagement envers l'excellence technique et la conception
            fonctionnelle se reflète dans chaque projet que je présente ici.
            Joignez-vous à moi pour explorer un aperçu des réalisations qui
            témoignent de ma passion pour le développement web orienté
            résultats.{" "}
          </p>
          <div className="mt-8  flex justify-center gap-6 xl:justify-normal phone:flex-wrap">
            <a
              className="flex h-10 w-40 rounded-md bg-gradient-to-r from-lightBlue to-darkBlue p-[1px] phone:w-full phone:max-w-sm"
              href="#contact"
            >
              <div className="flex h-full w-full items-center justify-center rounded-md bg-[#1c1c1c] font-normal ">
                Prenons contact !
              </div>
            </a>

            <div className="border-1 flex  h-10 w-48 cursor-pointer items-center justify-center rounded-md bg-darkBlue px-6 font-normal phone:w-full phone:max-w-sm">
              <a href="path_to_file" download="proposed_file_name">
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
        <div className="relative tablet:hidden">
          <div className=" absolute left-20 top-20 h-96 w-60 bg-[#333333]  xl:h-96 xl:w-96"></div>
          <div className=" relative h-96 w-60 bg-[url('/images/swiss.jpeg')] bg-center xl:h-96 xl:w-96"></div>
        </div>
      </div>
    </div>
  );
}
