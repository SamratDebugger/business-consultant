import { useState } from "react";

export default function LoginForm() {
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
        className="fieldset bg-base-200 border-base-300 rounded-box max-w-xs w-full border p-4"
      >
        <legend className="fieldset-legend">Login</legend>

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
          placeholder="Enter your Password"
          required
        />

        <button
          disabled={!email || !pass ? true : false}
          className="btn btn-info mt-4"
        >
          Login
        </button>
      </form>
    </main>
  );
}
