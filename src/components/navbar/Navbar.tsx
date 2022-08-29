import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="bg-slate-100 mb-5">
      <nav className="py-3 w-4/5 m-auto">
        <ul className="flex gap-10">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/blog">Blog</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
