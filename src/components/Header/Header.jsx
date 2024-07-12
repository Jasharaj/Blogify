import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { light, dark } from "../../store/authSlice";
import Theme from "./Theme";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const themeMode = useSelector((state) => state.auth.themeMode);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  // const handleTheme = () => {
  //   if (themeMode === "light") {
  //     dispatch(dark());
  //   } else {
  //     dispatch(light());
  //   }
  // };

  return (
    <div className="navbar bg-gray-500 dark:bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white dark:bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <button className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
                  <LogoutBtn />
                </button>
              </li>
            )}
          </ul>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 210 210"
          id="blogger"
        >
          <g transform="translate(0 -87)">
            <path
              fill="#ff7f2a"
              d="M 25 18.701172 L 25 242.65039 L 248.94727 18.701172 L 25 18.701172 z M 775 544.75195 L 551.05078 768.70117 L 775 768.70117 L 775 544.75195 z "
              paint-order="fill markers stroke"
              transform="translate(0 87) scale(.26458)"
            ></path>
            <path
              fill="#ff7f2a"
              d="m 84.956378,124.9894 c -10.970675,-0.003 -18.036979,0.14146 -20.16907,0.42359 -11.355542,1.50234 -20.394931,9.76872 -23.420076,21.41478 -0.996912,3.83788 -1.058053,6.3717 -1.058053,44.50777 0,44.53911 -0.06913,43.50711 3.449413,50.50396 3.640108,7.23898 12.320885,13.79118 19.691853,14.86274 v 0.002 c 4.485648,0.65188 80.299045,0.65536 84.504565,0.003 9.17534,-1.42202 18.00489,-8.83786 21.43264,-17.99937 1.87634,-5.01498 2.23404,-10.39855 2.06784,-31.14274 l -0.15905,-19.7723 -10.1605,-0.27533 -10.16046,-0.27374 -0.32169,-19.22358 c -0.33727,-20.09806 -0.45008,-21.45395 -2.24838,-27.07501 -2.20558,-6.89423 -8.31377,-11.63651 -18.57481,-14.42309 -4.53217,-1.23076 -5.48416,-1.27412 -32.640493,-1.48164 -4.486167,-0.036 -8.576798,-0.0508 -12.233689,-0.052 z m 11.897695,34.51887 c 25.801367,0 25.690677,-0.012 27.809537,3.12944 1.43425,2.12698 1.46178,8.60141 0.0448,10.70026 -2.40583,3.56322 -1.6522,3.46376 -26.731826,3.54767 -12.535756,0.042 -23.391223,-0.0439 -24.124232,-0.18941 -1.973645,-0.39162 -3.837317,-1.77368 -4.736204,-3.51191 -1.108445,-2.14352 -1.047024,-8.41396 0.101901,-10.35891 1.983275,-3.35743 1.6482,-3.3171 27.636184,-3.3171 z m 10.734187,49.70329 c 32.55053,0 34.68702,0.0607 36.072,1.00083 2.5512,1.73172 3.40737,3.60686 3.42435,7.51179 0.012,2.3685 -0.3069,4.16759 -0.94008,5.34569 -1.91375,3.56007 -0.56789,3.44222 -39.14246,3.44222 H 72.034596 l -2.132171,-2.13221 c -2.082739,-2.0827 -2.132211,-2.22484 -2.132211,-6.09449 0,-4.50842 0.833631,-6.41897 3.506597,-8.03724 1.6279,-0.98552 3.382158,-1.03659 36.311449,-1.03659 z"
            ></path>
          </g>
        </svg>

        <a className="btn btn-ghost text-xl">Blogify</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Theme />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
