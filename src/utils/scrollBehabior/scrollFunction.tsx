import { useEffect, useState } from "react";

export default function useScrollModifier() {
  let sections = ["index", "project", "aboutme", "contact"];
  let [index, setIndex] = useState<number>(0);
  let onCooldown = false;
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    if (window.location.hash) {
      setIndex(sections.indexOf(window.location.hash.substr(1)));
    }

    setWindowSize(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, []);

  if (windowSize > 640) {
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
    function fn(e: WheelEvent) {
      function scrollHandler(deltaY: number) {
        onCooldown = true;
        if (deltaY === -100) {
          scrollUp();
        } else if (deltaY === 100) {
          scrollDown();
        }
      }
      !onCooldown && scrollHandler(e.deltaY);
    }
    document.onwheel = (e) => fn(e);
  }
  return [windowSize, onCooldown];
}
