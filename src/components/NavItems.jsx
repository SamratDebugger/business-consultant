import { Link } from "react-router";

export default function NavItems() {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
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
