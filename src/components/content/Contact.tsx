import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";

export default function Contact() {
  return (
    <div
      className="section grid-cols grid h-[calc(100vh-90px)] w-full snap-center snap-always grid-cols-2 items-center justify-center  gap-6 bg-[#1e1e1e] p-20 font-raleway text-white xl:h-[calc(100vh-90px)] phone:grid-cols-1 phone:grid-rows-1 tablet:p-5 "
      id="contact"
    >
      <div>
        <div className="h-auto w-full ">
          <span className=" text-[40px] xl:mb-10 phone:text-3xl tablet:text-center">
            Travaillons ensemble !
          </span>
          <div className="relative -left-10 mt-10 h-1 w-1/5 bg-gradient-to-r from-lightBlue to-darkBlue phone:hidden tablet:hidden"></div>
          <div className="relative left-10 mt-5  h-1 w-1/5 bg-gradient-to-r from-lightBlue to-darkBlue phone:hidden tablet:hidden"></div>
          <p className="text-md mt-5  ">
            Si vous avez des questions ou si vous souhaitez discuter de votre
            projet,
            <br className="md:hidden phone:hidden" /> n'hésitez pas à me
            contacter par mail ou via le formulaire de contact.
          </p>
        </div>
        <div className="phone:hidden">
          <div className="grid grid-cols-2 items-center justify-center gap-6 2xl:mt-20">
            <div className="mt-5 flex aspect-square max-w-[280px]  grow flex-col items-center justify-center rounded-lg lg:bg-[#252526]  xl:shadow-lg ">
              <div className="rounded-lg  bg-slate-50/30 p-3">
                <Image
                  src={"/icons/mail.svg"}
                  width={40}
                  height={40}
                  alt="mail logo"
                />
              </div>
              <p className="mt-2 text-sm font-bold underline ">
                leo.piras@outlook.com
              </p>
            </div>
            <div className="mt-5 flex aspect-square max-w-[280px] grow flex-col items-center justify-center rounded-lg  lg:bg-[#252526]  lg:shadow-lg">
              <div className="rounded-lg  bg-slate-50/30 p-2">
                <Image
                  src="/icons/linkedin.svg"
                  alt="linkeding logo"
                  height={50}
                  width={50}
                />
              </div>
              <p className="mt-2 text-sm font-bold underline">LinkedIn</p>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}

{
  /* <div
        className="flex w-1/2 flex-col justify-center p-5
          "
      >
        <span className="text-[60px]">Travaillons ensemble !</span>
        <div className="relative -left-10 flex h-1 w-28 bg-gradient-to-r from-lightBlue to-darkBlue"></div>
        <div className="relative left-10 mt-5 flex h-1 w-28 bg-gradient-to-r from-lightBlue to-darkBlue"></div>
        <p className="text-md mt-5">
          Si vous avez des questions ou si vous souhaitez discuter de votre
          projet,
          <br /> n'hésitez pas à me contacter par mail ou via le formulaire de
          contact.
        </p>

        <div className="flex gap-6">
          <div className="mt-5 flex h-[300px] w-[300px] grow flex-col items-center justify-center rounded-lg  lg:bg-[#252526] lg:bg-transparent lg:shadow-lg">
            <p className="mb-2 text-center font-bold">
              Contactez moi par mail :{" "}
            </p>
            <div className="rounded-lg  bg-slate-50/30 p-3">
              <Image
                src={"/icons/mail.svg"}
                width={40}
                height={40}
                alt="mail logo"
              />
            </div>
            <p className="mt-2 text-lg font-bold underline">
              leo.piras@outlook.com
            </p>
          </div>
          <div className="mt-5 flex h-[300px] w-[300px] grow flex-col items-center justify-center rounded-lg  lg:bg-[#252526] lg:bg-transparent lg:shadow-lg">
            <p className="mb-2 text-center font-bold">
              Contactez moi via LinkedIn :{" "}
            </p>
            <div className="rounded-lg  bg-slate-50/30 p-2">
              <Image
                src="/icons/linkedin.svg"
                alt="linkeding logo"
                height={50}
                width={50}
              />
            </div>
            <p className="mt-2 text-lg font-bold underline">LinkedIn</p>
          </div>
        </div>
      </div> */
}
