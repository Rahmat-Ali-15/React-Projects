import { NavLink } from "react-router-dom";

export const Navbar = () => {

    const route = [
        {path: "/", title: "Home"},
        {path: "/ourcourse", title: "Our Course"},
        {path: "/placement", title: "Placement"},
        {path: "/contact", title: "Contact"},
        {path: "/about", title: "About"}
    ]


  return (
    <>
      <div className="relative h-30 flex items-center justify-center">
        <div className="absolute top-7 flex w-[80%] h-15 items-center justify-between pl-7 pr-2 rounded-full bg-black text-white">
          <div>Logo</div>
          <div className="flex gap-15">
            {route.map((el,id) => (
                <NavLink className= "text-[18px] hover:text-red-500 transition" key={id} to = {el.path} end>{el.title}</NavLink>
            ))}
          </div>
          <div className="px-10 py-3 bg-[#ec0d14] rounded-4xl font-bold hover:bg-[#b30a10] transition">
            <button className="text-[18px]">Login / Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};
