import React from "react";
import play from "/public/icons/interface/play.png";
import Image from "next/image";
import { projects } from "../../constant/projectShowcase";

type ModalProps = {
  index: number;
  isToggled: boolean;
  closeModalFn: (arg0: boolean) => void;
};

export default function Modal({ index, isToggled, closeModalFn }: ModalProps) {
  const data = projects[index];

  return (
    <div
      className={`fixed right-0 top-0 z-50 h-screen  w-[500px] overflow-y-auto bg-slate-900 px-7 duration-500 ease-in phone:w-full ${
        isToggled === true ? "translate-x-0" : "translate-x-full"
      } `}
    >
      <div className="flex h-20 items-end justify-between border-b-[1px] border-b-white pb-2">
        <Image
          src={play}
          alt="close icon"
          width={25}
          className="cursor-pointer invert filter"
          onClick={() => closeModalFn(false)}
        />{" "}
        <p
          className="cursor-pointer text-lg font-bold"
          onClick={() => closeModalFn(false)}
        >
          Fermer
        </p>
      </div>
      <div className="mt-10 flex grow flex-col ">
        <div>
          <h2 className="text-2xl font-extrabold">{data?.name}</h2>
        </div>
        <div className="relative mt-8 h-[300px] w-full overflow-hidden rounded-xl">
          <Image
            src={data?.image!}
            fill
            alt="projet image"
            className="object-cover object-top"
            sizes=""
          />
        </div>
        <div className="mt-6">
          <span className="text-lg font-semibold">Description</span>
          <p className="mt-2 text-gray-400">{data?.description}</p>
          <div className="mt-6">
            <span className="text-lg font-semibold">Technologies</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {data?.tags.map((tag) => (
                <div
                  key={`${tag}-modal`}
                  className="rounded bg-slate-700 px-2 "
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <span className="text-lg font-semibold">Repo</span>
            <p className="mt-2 text-gray-400">https://github.com/PirasL/kasa</p>
          </div>
        </div>
      </div>
    </div>
  );
}
