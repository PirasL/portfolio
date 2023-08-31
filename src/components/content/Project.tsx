import React, { useState } from "react";
import github from "../../assets/github.svg";
import { projects } from "../../constant/projectShowcase";
import Image from "next/image";
import Modal from "./Modal";

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
    <div className="group relative flex  h-full w-full cursor-pointer flex-col  overflow-hidden rounded-lg  phone:h-[260px] phone:w-full phone:max-w-[500px]">
      <Image
        src={img}
        fill
        alt="thumbnail"
        className="bg-white  object-cover  object-top group-hover:z-10 "
        onClick={toggleModal}
      />
      <div className=" pointer-events-none flex h-full w-full flex-col-reverse bg-gradient-to-b from-white/0 to-black/50 p-4 group-hover:z-20 tablet:z-20">
        <div>
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
  const [modalToggler, setModalToggler] = useState(false);

  const [activeProject, setActiveProject] = useState(0);

  return (
    <div
      className=" section  flex  h-[calc(100vh-90px)] w-full snap-center snap-always flex-wrap items-center justify-center bg-[#1e1e1e] p-10 font-raleway text-white phone:h-auto phone:p-4"
      id="project"
    >
      <div className="flex h-full flex-col justify-center">
        <h1 className="mb-10 text-[50px]">Projets. </h1>

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
                setModalToggler(true);
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

// function ProjectCard({ name, description, img, tags }: ProjectCardProps) {
//   return (
//     <div className=" box-border flex  w-[350px]  cursor-pointer flex-col overflow-hidden rounded-lg border-[3px] border-white/5 p-2">
//       <div className="relative mb-5 h-40 w-full overflow-hidden rounded-lg bg-red-500 ">
//         <Image src={img} alt={"fdssd"} fill />
//       </div>
//       <span className="mb-5 text-2xl">{name}</span>
//       <p className="mb-8 h-28 ">{description}</p>
//       <div className="wrap bg-slate mb-6 flex grow flex-wrap items-center justify-center gap-3">
//         {tags.map((tag) => (
//           <div
//             className="flex h-5 items-center justify-center rounded-lg bg-lightGrey px-4"
//             key={tag}
//           >
//             {tag}
//           </div>
//         ))}
//       </div>
//       <a className="flex min-w-[10px] items-center gap-6">
//         Github <Image src={github} alt={"github icon"} width={25} height={25} />
//       </a>
//     </div>
//   );
// }
