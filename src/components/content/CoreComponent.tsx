import React, { useEffect, useState } from "react";
import Index from "./Index";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Contact from "./Contact";
import useScrollModifier from "../../utils/scrollBehabior/scrollFunction";

export default function CoreComponent() {
  useScrollModifier();
  return (
    <div className="h-[calc(100vh-90px)] snap-y snap-mandatory overflow-hidden scroll-smooth phone:h-auto tablet:snap-none  tablet:overflow-auto">
      <Index />
      <Project />
      <AboutMe />
      <Contact />
    </div>
  );
}
