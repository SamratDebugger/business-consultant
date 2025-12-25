import {
  FaEnvelope,
  FaFacebook,
  FaGlobeAmericas,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 max-w-1xl mx-auto">
      <aside>
        <h3> AFFIRM CONSULTING </h3>
        <p className="max-w-100">
          Get education on business planning, direct access to planning experts
          and a funding platform that’s helped raise over $5M.
        </p>
        <div className="flex gap-2">
          <a className="btn btn-circle hover:btn-success text-xl" href="">
            <FaFacebook />
          </a>
          <a className="btn btn-circle hover:btn-success text-xl" href="">
            <FaInstagram />
          </a>
          <a className="btn btn-circle hover:btn-success text-xl" href="">
            <FaLinkedin />
          </a>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Solution</h6>
        <a className="link link-hover">Business Consulting</a>
        <a className="link link-hover">Financial Advisory</a>
        <a className="link link-hover"> business Planing</a>
      </nav>
      <nav>
        <h6 className="footer-title">Contact</h6>
        <a
          href="tel:+8801638832412"
          className="link link-hover flex items-center gap-3 "
        >
          <FaPhoneAlt className="text-success" /> +880 1638832412
        </a>
        <a
          href="mailto:md721023@gmail.com"
          className="link link-hover flex items-center gap-3 "
        >
          <FaEnvelope className="text-success" /> md721023@gmail.com
        </a>
        <a className="link link-hover flex items-center gap-3 ">
          <FaGlobeAmericas className="text-success" /> Bangladesh
        </a>
      </nav>
    </footer>
  );
}
