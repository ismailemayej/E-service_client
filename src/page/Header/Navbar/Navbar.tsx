import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="lg:mx-20 lg:my-8 my-4 md:mx-[50px] max-w-screen-[1440px] h-12 px-5 overflow-x-hidden">
      <div className="  flex flex-wrap items-center justify-between mx-auto">
        <Link
          to="/"
          className=" text-[38px] text-2xl font-semibold first-letter:flex items-center space-x-3 rtl:space-x-reverse"
        >
          E-
          <span className="self-center whitespace-nowrap text-[#3461FF]">
            Service
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className="text-[24px] ml-[16px] block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-[24px] ml-[16px] block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-[24px] block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <header classNameName="max-w-screen-[1440] my-[24px] mx-[80px] flex flex-wrap items-center justify-between mx-auto">
    //   <div classNameName="text-[35px] font-bold ">
    //     E- <span classNameName="text-[#3461FF]">service</span>
    //   </div>
    //   <div classNameName="text-[24px]">
    //     <Link classNameName="me-16 px-[8] py-[8px]" to="/services">
    //       Home
    //     </Link>
    //     <Link classNameName="me-16 px-[8] py-[8px]" to="/about">
    //       About
    //     </Link>
    //     <Link classNameName=" px-[8] py-[8px]" to="/contact">
    //       contact
    //     </Link>
    //   </div>
    // </header>
  );
};

export default Navbar;
