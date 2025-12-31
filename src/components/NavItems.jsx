import { NavLink } from "react-router";

export default function NavItems() {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <a>Services</a>
      </li>
      <li>
        <a>About us</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
}
