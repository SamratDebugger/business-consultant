import { FaPlayCircle, FaSquareFull } from "react-icons/fa";
import { Link } from "react-router";

export default function Hero() {
  return (
    <div className="bg-base-200">
      <div className="grid lg:grid-cols-2 max-lg:gap-8 items-center max-w-1xl mx-auto pt-10 px-5 ">
        <div className="">
          <h3 className="flex items-center gap-3 ">
            <FaSquareFull className="text-rose-600" /> Build Your Plan
          </h3>
          <h1 className="md:text-7xl xs:text-5xl text-3xl font-bold ">
            Everything you need to run your online business
          </h1>
          <p className="py-6 opacity-50">
            Get education on business planning, direct access to planning
            experts and a funding platform that&apos;s helped raise over $500
            million for startups and small businesses world-wide.
          </p>
          <Link to={"/registration"}>
            <button className="btn btn-success md:btn-lg ">
              Get Started <span className="opacity-50">-for free</span>
            </button>
          </Link>
          <button className="btn btn-ghost md:btn-lg hover:bg-transparent hover:border-none hover:shadow-none hover:text-success">
            <FaPlayCircle /> Watch Demo
          </button>
        </div>
        <img
          src="/assets/images/logo_files/business-consultant-hero-man.webp"
          className="w-full"
        />
      </div>
    </div>
  );
}
