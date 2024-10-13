import {Outlet} from "react-router";
import {NavLink} from "react-router-dom";

function Header() {
  return <div className={"flex justify-between my-4 items-center"}>
    <div className={"flex-1"}>
      <span className={'font-semibold text-2xl'}>Manh's Portfolio</span>
    </div>
    <div className={"flex gap-6 font-semibold"}>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/projects"}>Projects</NavLink>
      <NavLink to={"/blogs"}>Blogs</NavLink>
      <NavLink to={"/photos"}>Photos</NavLink>
    </div>
  </div>;
}

function RootLayout() {
  return (
    <div className={'min-h-screen max-w-4xl mx-auto flex flex-col'}>
      <Header/>
      <div className={'flex-1'}><Outlet/></div>
      <div className={'flex mt-16 justify-center'}>
        <div>
          2024 - Manh Nguyen
        </div>
      </div>
    </div>
  );
}

export default RootLayout;