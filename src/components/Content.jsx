import React from "react";
import { useState, useRef, useEffect } from "react";
import "../App.css";
import AnchorVisualIndicator from "./AnchorVisualIndicator";
import AboutMe from "./Sections/AboutMe";
import Contact from "./Sections/Contact";
import Index from "./Sections/Index";
import Project from "./Sections/Project";

export default function Content() {
  let index = 0;
  let sections = ["index", "project", "aboutme", "contact"];
  let onCooldown = false;

  document.onwheel = (e) => fn(e);
  function fn(e) {
    function scrollDown() {
      setTimeout(() => {
        onCooldown = false;
      }, 900);
      if (index < 3) {
        index++;
        document.location.replace(`http://127.0.0.1:5173/#${sections[index]}`);
      }
    }

    function scrollUp() {
      setTimeout(() => {
        onCooldown = false;
      }, 900);
      if (index > 0) {
        index--;
        document.location.replace(`http://127.0.0.1:5173/#${sections[index]}`);
      }
    }

    function scrollHandler(deltaY) {
      onCooldown = true;
      if (deltaY === -100) {
        scrollUp();
      } else if (deltaY === 100) {
        scrollDown();
      }
    }
    !onCooldown && scrollHandler(e.deltaY);
  }

  return (
    <>
      <AnchorVisualIndicator />
      <div className="h-full scroll-smooth overflow-hidden">
        {/* 1ST PAGE */}
        <Index />
        {/* 2ND PAGE */}
        <Project />
        {/* 3RD PAGE */}
        <AboutMe />
        {/* 4TH PAGE */}
        <Contact />
      </div>
    </>
  );
}
