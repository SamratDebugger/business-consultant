import { useState } from "react";
import { Link } from "react-router";

export default function RegistrationForm() {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    alert("Form Submitted");
  }
  return (
    <main className="flex justify-center items-center min-h-dvh">
      <form
        onSubmit={handleSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box max-w-xs w-full border p-4 shadow-2xl"
      >
        <h2 className="text-center font-bold text-3xl">Registration</h2>

        <label htmlFor="firstName" className="label">
          First Name
        </label>
        <input
          name="firstName"
          type="text"
          className="input"
          placeholder="Enter your Name"
          required
        />
        <label htmlFor="lastName" className="label">
          Last Name
        </label>
        <input
          name="lastName"
          type="text"
          className="input"
          placeholder="Enter your Last Name"
          required
        />
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          className="input"
          placeholder="Enter your Email"
          required
        />

        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          onChange={(e) => setPass(e.target.value)}
          name="password"
          type="password"
          className="input"
          placeholder="Create a Password"
          required
        />

        <button
          disabled={!email || !pass ? true : false}
          className="btn btn-info mt-4"
        >
          Registration
        </button>
        <p className="text-sm">
          Already Have an Account?{" "}
          <Link className="link link-hover link-info" to="/login">
            Login Now
          </Link>
        </p>
      </form>
    </main>
  );
}
