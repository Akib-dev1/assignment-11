import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "./AuthProvidor";
import { toast } from "react-toastify";

const Login = () => {
  const {emailLogin, setError, setUser, error, authorizeWithGoogle } = use(AuthContext);
  const {state} = useLocation();
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    emailLogin(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(state? state : "/");
      })
      .catch((e) => {
        if (e.code === 'auth/user-not-found') {
          setError('No account found with this email. Please register first.');
        } else if (e.code === 'auth/wrong-password') {
          setError('Incorrect password. Please try again.');
        } else if (e.code === 'auth/invalid-email') {
          setError('Invalid email format.');
        } else if (e.code === 'auth/too-many-requests') {
          setError('Too many unsuccessful login attempts. Please try again later.');
        } else if (e.code === 'auth/user-disabled') {
          setError('This account has been disabled. Contact support for help.');
        } else if(e.code==='auth/invalid-credential'){
          setError('Invalid credentials. Please check your email and password.');
        }
         else {
          setError(e.message || 'An unexpected error occurred. Please try again.');
        }
      });
  };

  const handleGoogle = () => {
      authorizeWithGoogle().then((result)=>{
        setUser(result.user);
        navigate(state?state:"/");
        setError("");
        toast("Login Successful");
      }).catch((error)=>{
        setError(error.code);
        toast(error.code);
      });
    }
  return (
    <div>
      <title>ServView - Login</title>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Log in to add services and share your experiences. Browse honest
              reviews and keep track of what you’ve posted.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" name="email" required/>
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                  required
                />
                <div className="mt-2">
                  <a className="link link-hover text-base font-medium">
                    Forgot password?
                  </a>
                </div>
                <div className="flex">
                  <p className="font-medium text-base">Don't have an account?</p>
                  <Link
                    to="/register"
                    className="text-base font-medium hover:underline"
                  >
                    Register
                  </Link>
                </div>
                <p className="text-base text-red-600 font-medium">{error}</p>
                <input
                  type="submit"
                  value="Log In"
                  className="btn btn-neutral mt-4"
                />
              </form>
              <button className="btn bg-white text-black border-[#e5e5e5]" onClick={handleGoogle}>
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
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
