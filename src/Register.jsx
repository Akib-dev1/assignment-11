import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "./AuthProvidor";
import { toast } from "react-toastify";

const Register = () => {
  const { updateUser, setError, error, setUser, emailRegister, authorizeWithGoogle } = use(AuthContext);
  const {state} = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const URL = e.target.url.value;
    emailRegister(email, password)
      .then((result) => {
        updateUser({ displayName: name, photoURL: URL })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: URL });
            navigate(state?state:"/");
            setError("");
            toast("Registration Successful");
          })
          .catch((error) => {
            setError(error.code);
            toast(error.code);
          });
      })
      .catch((e) => {
        if (e.code === 'auth/email-already-in-use') {
          setError('Email address is already in use. Please use a different email or try logging in.');
        } else if (e.code === 'auth/invalid-email') {
          setError('Invalid email address format.');
        } else if (e.code === 'auth/weak-password') {
          setError('Password is too weak. It should be at least 6 characters.');
        } else if (e.code === 'auth/operation-not-allowed') {
          setError('Email/password accounts are not enabled. Please contact support.');
      } else if (e.code === 'auth/missing-password') {
          setError('Password is required.');
        } else {
          setError(e.message || 'An unexpected error occurred. Please try again.');
        }
      });
  };
  const handleGoogle = () => {
    authorizeWithGoogle().then((result)=>{
      setUser(result.user);
      navigate("/");
      setError("");
      toast("Registration Successful");
    }).catch((error)=>{
      setError(error.code);
      toast(error.code);
    });
  }

  return (
    <div>
      <title>ServView - Register</title>
      <div className="flex justify-center items-center min-h-screen">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-base">Register Form</legend>

          <form onSubmit={handleSubmit}>
            <label className="label">Name</label>
            <input
              type="text"
              className="input mb-2"
              placeholder="Name"
              name="name"
              required
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input mb-2"
              placeholder="URL"
              name="url"
              required
            />

            <label className="label">Email</label>
            <input
              type="email"
              className="input mb-2"
              placeholder="Email"
              name="email"
              required
            />

            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                required
                placeholder="Password"
                minLength="6"
                name="password"
                pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Must be at least 6 characters, including a lowercase and an uppercase letter"
              />
            </label>
            <p className="validator-hint hidden">
              Must be at least 6 characters, including:
              <br />
              At least one lowercase letter
              <br />
              At least one uppercase letter
            </p>

            <div className="flex items-center gap-2 text-base mt-2">
              <p>Already have an account?</p>
              <Link to="/login" className="hover:underline ">
                Log In
              </Link>
            </div>
            <p className="text-base text-red-600 font-medium">{error}</p>
            <input
              type="submit"
              name="submit"
              value="Register"
              className="btn btn-neutral mt-4"
            />
          </form>
          <button className="btn mt-2 bg-white text-black border-[#e5e5e5]" onClick={handleGoogle}>
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Continue with Google
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default Register;
