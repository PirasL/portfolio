import FileContainer from "./FilesContainer";
import SideNavbar from "./SideNavbar";
import Display from "./Display";

export default function MainContainer() {
  return (
    <div className="flex grow">
      <SideNavbar />
      <FileContainer />
      <Display />
    </div>
  );
}
