import FileTabContainer from "./FileTabContainer";

import Content from "./Content";

export default function Display() {
  return (
    <div className="flex flex-col max-h-[calc(100vh-64px)] grow relative">
      <FileTabContainer />

      <Content />
    </div>
  );
}
