import React, { useState } from "react";
import github from "../../assets/github.svg";
import { projects } from "../../constant/projectShowcase";
import Image from "next/image";
import Modal from "./Modal";
import { useAppContext } from "~/context/TabContext";

type ProjectCardProps = {
  name: string;
  description: string;
  img: string;
  tags: string[];
  toggleModal: () => void;
};

function ProjectCard({
  name,
  description,
  img,
  tags,
  toggleModal,
}: ProjectCardProps) {
  return (
    <div className="group relative flex  h-full w-full cursor-pointer flex-col overflow-hidden phone:h-[260px] phone:w-full phone:max-w-[500px]">
      <Image
        src={img}
        sizes="300px"
        fill
        alt="thumbnail"
        className="bg-white  object-cover  object-top group-hover:z-10 "
        onClick={toggleModal}
      />
      <div className=" group pointer-events-none flex h-full w-full max-w-7xl flex-col-reverse bg-gradient-to-b from-white/0 to-black/70 p-4 group-hover:z-20 tablet:z-20">
        <div className="invisible translate-y-full duration-300 group-hover:visible group-hover:translate-y-0 tablet:visible tablet:translate-y-0">
          <h2 className="font-raleway text-2xl  font-bold">{name}</h2>
          <p>{description}</p>
          <div className=" mt-3 flex flex-wrap gap-2 ">
            {tags.map((tag) => {
              return (
                <div key={tag} className="rounded bg-gray-400 px-2 font-bold">
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Project() {
  const { toggleModal, setToggleModal, activeProject, setActiveProject } =
    useAppContext();
  const [modalToggler, setModalToggler] = useState(false);

  return (
    <div
      className=" section  m-auto flex h-[calc(100vh-90px)]  w-full  snap-center snap-always flex-wrap items-center justify-center bg-[#1e1e1e] p-10 font-raleway text-white phone:h-auto phone:p-4"
      id="project"
    >
      <div
        className="flex h-full max-w-7xl flex-col justify-center
      "
      >
        <h1 className="mb-10 text-[50px] tablet:mb-5 tablet:mt-5 tablet:text-4xl tablet:underline">
          Projets.{" "}
        </h1>
        <div className="relative grid h-1/2 w-full flex-wrap items-center justify-center gap-7 sm:h-full sm:grid-cols-2 md:h-full md:grid-cols-2  lg:h-[470px] lg:grid-cols-2   xl:h-96 xl:grid-cols-4 phone:grid-cols-1">
          {projects.map((el, id) => (
            <ProjectCard
              key={el.name}
              name={el.name}
              description={el.description}
              img={el.image}
              tags={el.tags}
              toggleModal={() => {
                setActiveProject(id);
                setToggleModal(true);
              }}
            />
          ))}
        </div>

        <Modal
          index={activeProject}
          isToggled={modalToggler}
          closeModalFn={setModalToggler}
        />
      </div>
    </div>
  );
}
