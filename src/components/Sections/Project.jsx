import React from "react";
import github from "../../assets/github.svg";
import { projects } from "../../constants/ProjectShowcase";

function ProjectCard({ name, description, img, tag }) {
  return (
    <div className=" border-[3px] border-white/5 w-[350px] h-[430px]  flex flex-col overflow-hidden box-border p-2 rounded-lg cursor-pointer">
      <div className="mb-5">
        <img src={img} className="h-40 object-cover rounded-lg" />
      </div>
      <div className={`bg-[url('/assets/githb.svg')]`}></div>
      <span className="text-2xl mb-5">{name}</span>
      <p className="h-28 mb-8">{description}</p>

      <a className="flex items-center gap-6">
        Github <img src={github} className="h-7" />
      </a>
    </div>
  );
}

export default function Project() {
  return (
    <div
      className="bg-[#1e1e1e] flex  flex-col p-10 text-white font-raleway justify-center items-center h-[calc(100vh-112px)]"
      id="project"
    >
      <div>
        <h1 className="text-[50px] mb-10">Projets</h1>

        <div className="relative flex gap-7">
          {projects.map((el) => (
            <ProjectCard
              name={el.name}
              description={el.description}
              img={el.image}
              tags={el.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
