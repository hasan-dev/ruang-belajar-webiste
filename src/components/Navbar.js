import React from "react";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className=" w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            data-aos="flip-left"
            className={
              (props.transparent ? "text-green-500" : "text-gray-800") +
              " text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
            }
            href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
          >
            Ruang Belajar
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {/* Icon 1 */}
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#hasan"
              >
                <i
                  className={
                    (props.transparent ? "text-green-500" : "text-gray-500") +
                    " fab fa-facebook text-lg leading-lg "
                  }
                />
                <span className="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>
            {/* Icon 2 */}
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#hasan"
              >
                <i
                  className={
                    (props.transparent ? "text-green-500" : "text-gray-500") +
                    " fab fa-instagram text-lg leading-lg "
                  }
                />
                <span className="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>

            {/* Icon 3 */}
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#hasan"
              >
                <i
                  className={
                    (props.transparent ? "text-green-500" : "text-gray-500") +
                    " fab fa-twitter text-lg leading-lg "
                  }
                />
                <span className="lg:hidden inline-block ml-2">Tweet</span>
              </a>
            </li>

            {/* Icon 4 */}
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#hasan"
              >
                <i
                  className={
                    (props.transparent ? "text-green-500" : "text-gray-500") +
                    " fab fa-linkedin text-lg leading-lg "
                  }
                />
                <span className="lg:hidden inline-block ml-2">profile</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
