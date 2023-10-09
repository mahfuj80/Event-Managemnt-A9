import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Nav = () => {
  const { user, logOut } = useAuth();

  console.log(user);
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
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li
                onClick={() => {
                  logOut()
                    .then(() => {
                      alert('Sign-out successful.');
                    })
                    .catch((error) => {
                      alert(error);
                    });
                }}
              >
                <a>Logout</a>
              </li>
            </ul>
          </div>
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
