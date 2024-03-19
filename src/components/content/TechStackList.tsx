import React from "react";
import { techStack } from "../../constant/techStackList";

type TechStackCardProps = {
  name: string;
  url: string;
  logo: string;
};
const TechStackCard = ({ name, url, logo }: TechStackCardProps) => {
  return (
    <a href={url} className="flex flex-col items-center ">
      <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-slate-700 md:h-12">
        <img className="h-7 " src={`/icons/${logo}.svg`} />
      </div>
      <h3 className="mt-2 font-bold lg:mt-0">{name}</h3>
    </a>
  );
};

export default function TechStackList() {
  return (
    <div className=" mt-20 hidden  grid-cols-6 gap-4 lg:mt-10 xl:grid">
      {techStack.map((el) => {
        return <TechStackCard key={el.name} {...el} />;
      })}
    </div>
  );
}
