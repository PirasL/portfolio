import { useState } from "react";

export default function AnchorVisualIndicator() {
  return (
    <nav className="absolute top-[50%] left-5">
      <ul className="flex flex-col gap-4">
        <li className="w-3 h-3 bg-white rounded-full"></li>
        <li className="w-3 h-3 bg-white rounded-full"></li>
        <li className="w-3 h-3 bg-white rounded-full"></li>
      </ul>
    </nav>
  );
}
