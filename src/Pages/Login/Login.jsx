import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Login = () => {
  const { user, loginUser, googleSignIn, githubSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  if (user) {
    navigate('/');
    return;
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    loginUser(email, password)
      .then(() => {
        // Signed in
        toast.success('sign in successfully');
        navigate(location?.state ? location.state : '/');
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        // Signed in
        toast.success('sign in successfully');
        navigate(location?.state ? location.state : '/');
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        toast.error(errorMessage);
        // ...
      });
  };
  const handleGithub = () => {
    githubSignIn()
      .then(() => {
        toast.success('sign in successfully');
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className="w-fit mx-auto" src="/logo.png" alt="logo" />
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provide Valid Email and Password That you previously <br /> used
              for REgistration. For login. Or, Login with your Github/Google
              Instant.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <p className="mb-2">
                  New Here Please
                  <Link
                    className="text-green-600 underline"
                    to={'/registration'}
                  >
                    Register
                  </Link>
                </p>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                ></input>
              </div>
            </form>
            <div className="px-8 pb-8 text-center flex gap-2 flex-col">
              <p className="text-xl font-bold mb-3">Sign in with</p>
              <div className="flex gap-4 items-center justify-center">
                <button
                  onClick={() => handleGoogle()}
                  className="btn btn-primary"
                >
                  <FaGoogle className="text-2xl text-white"></FaGoogle>
                </button>
                <button
                  onClick={() => handleGithub()}
                  className="btn btn-primary"
                >
                  <FaGithub className="text-2xl text-white"></FaGithub>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
