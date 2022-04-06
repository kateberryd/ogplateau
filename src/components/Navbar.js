import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default () => (
  <nav className=" ">
    <div className="first-nav flex justify-between w-3/4 mx-auto py-4 bg-white">
      <div className="logo">
        <img
          class="block lg:hidden h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="Workflow"
        />

        <h1 className="font-extrabold  uppercase text-secondary text-2xl">
          pen<span className="text-primary">Eye</span>
        </h1>
      </div>

      <div class="hidden sm:block sm:ml-6 pt-1 pl-3">
        <div class="flex space-x-4">
          <a
            href="#"
            class="  hover:text-white px-3 py-2 rounded-md text-sm  font-semibold"
            aria-current="page"
          >
            Home
          </a>

          <a
            href="#"
            class=" hover:underline underline-offset-8    text-sm font-semibold  hover:text-white px-3 py-2 rounded-md "
          >
            Report
          </a>

          <a
            href="#"
            class="   text-sm font-semibold  hover:text-white px-3 py-2 rounded-md "
          >
            About
          </a>

          <a
            href="#"
            class="bg-primary text-white  text-sm font-semibold  hover:text-secondary px-4 py-3 rounded-one "
          >
            Login / Register
          </a>
        </div>
      </div>
    </div>

    <div className="second-nav bg-primary py-2 mt-4 shadow-2xl">
      <div className="nav-links  mx-48 ">
        <a
          href="#"
          class=" text-secondary  text-sm font-semibold  hover:text-white px-3 py-2 rounded-md "
        >
          Pages
        </a>
        <a
          href="#"
          class=" text-white pl-8 text-sm font-semibold  hover:text-white px-3 py-2 rounded-md "
        >
          About
        </a>
        <a
          href="#"
          class=" text-white pr-8  text-sm font-semibold  hover:text-white px-3 py-2 rounded-md "
        >
          Dashbaord
        </a>
      </div>
    </div>
  </nav>
);
