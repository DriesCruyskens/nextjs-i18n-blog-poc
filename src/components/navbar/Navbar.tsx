import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/blog">Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
