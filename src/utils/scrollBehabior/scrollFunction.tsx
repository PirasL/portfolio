import { useEffect, useState } from "react";

export default function useScrollModifier() {
  let sections = ["index", "project", "aboutme", "contact"];
  let [index, setIndex] = useState<number>(0);
  let onCooldown = false;

  useEffect(() => {
    if (window.location.hash) {
      setIndex(sections.indexOf(window.location.hash.substr(1)));
    }
    document.onwheel = (e) => handleScroll(e);
  }, []);

  function scrollDown() {
    setTimeout(() => {
      onCooldown = false;
    }, 700);
    if (index < 3) {
      index++;
      document.location.replace(`http://localhost:3000/#${sections[index]}`);
    }
  }
  function scrollUp() {
    setTimeout(() => {
      onCooldown = false;
    }, 700);
    if (index > 0) {
      index--;
      document.location.replace(`http://localhost:3000/#${sections[index]}`);
    }
  }

  function handleScroll(e: WheelEvent) {
    if (window.innerWidth < 1024) {
      return;
    } else {
      function performScroll(deltaY: number) {
        onCooldown = true;
        if (deltaY === -100) {
          scrollUp();
        } else if (deltaY === 100) {
          scrollDown();
        }
      }
      !onCooldown && performScroll(e.deltaY);
    }
  }
}
