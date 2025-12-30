import { FaPlayCircle, FaSquareFull } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="grid lg:grid-cols-2 max-lg:gap-8 items-center  bg-base-200 min-h-screen max-w-1xl pt-10 px-5 ">
      <div className="">
        <h3 className="flex items-center gap-3 ">
          <FaSquareFull className="text-rose-600" /> Build Your Plan
        </h3>
        <h1 className="md:text-7xl xs:text-5xl text-3xl font-bold ">
          Everything you need to run your online business
        </h1>
        <p className="py-6 opacity-50">
          Get education on business planning, direct access to planning experts
          and a funding platform that’s helped raise over $500 million for
          startups and small businesses world-wide.
        </p>
        <button className="btn btn-success md:btn-lg ">
          Get Started <span className="opacity-50">-for free</span>
        </button>
        <button className="btn btn-ghost md:btn-lg hover:bg-transparent hover:border-none hover:shadow-none hover:text-success">
          <FaPlayCircle /> Watch Demo
        </button>
      </div>
      <img
        src="/assets/images/logo_files/business-consultant-hero-man.webp"
        className="w-full"
      />
    </div>
  );
}
