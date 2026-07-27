const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <img className="w-10" src="../logo.png" /> PUFF HUB
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <a className="group
rounded-full
px-8 py-4
bg-linear-to-r
from-[#2A1A10]
via-[#5C2B00]
to-[#A34800]
text-white
border border-orange-500/20
shadow-[0_0_40px_rgba(255,115,0,0.25)]
transition-all duration-600 ease-out transform-gpu hover:scale-[1.05] hover:-translate-y-2 hover:shadow-2xl">Get in Smoke</a>
      </div>
    </div>
  );
};

export default NavBar;