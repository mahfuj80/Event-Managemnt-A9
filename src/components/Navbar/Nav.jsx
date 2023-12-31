import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';

const Nav = () => {
  const { user, logOut } = useAuth();

  console.log(user?.photoURL);
  const navLinks = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/reviews'}>Reviews</NavLink>
      </li>
      <li>
        <NavLink to={'/bookings'}>Bookings</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 sticky z-10 opacity-[0.9] top-0">
      <Toaster position="top-center" reverseOrder={true} />

      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="hidden md:block  md:h-[70px]" to={'/'}>
          <img className="h-full" src="/logo.png" alt="Logo" />{' '}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <ul tabIndex={0} className="menu menu-horizontal px-1">
              <li className="bg-gray-200 font-bold rounded-lg">
                <button
                  onClick={() => {
                    return logOut()
                      .then(() => {
                        toast.success('Successfully Sign out');
                      })
                      .catch((error) => {
                        toast.error(error);
                      });
                  }}
                >
                  Logout
                </button>
              </li>
              <li className="font-bold mt-2">{user.displayName}</li>
            </ul>
            <div className="dropdown dropdown-end">
              <button
                onClick={() => {
                  logOut()
                    .then(() => {
                      toast.success('Sign-out successful.');
                    })
                    .catch((error) => {
                      toast.error(error);
                    });
                }}
              ></button>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="profile_image" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={'/profile'}>Profile</Link>
                </li>
                <li>
                  <Link to={'/settings'}>Settings</Link>
                </li>
                <li
                  onClick={() => {
                    logOut()
                      .then(() => {
                        toast.success('Sign-out successful.');
                      })
                      .catch((error) => {
                        toast.error(error);
                      });
                  }}
                >
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <ul tabIndex={0} className="menu menu-horizontal px-1">
            <li>
              <NavLink to={'/login'}>Login</NavLink>
            </li>
            <li>
              <NavLink to={'/registration'}>Register</NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Nav;
