import Navbar from "../components/Navbar";

const UserDashboard = () => {
  return (
    <div className="wrapper">
      <header>
        <nav className=" ">
          <div className="first-nav flex justify-between mx-48  py-4 bg-white">
            <div className="logo">
              <img
                class="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />

              <h1 className="font-extrabold  uppercase text-secondary text-2xl">
                open<span className="text-primary">Eye</span>
              </h1>
            </div>

            <div class="hidden sm:block sm:ml-6 pt-1 pl-3">
              <div class="flex space-x-4">
                <div className="flex justify-center">
                  <div className="mb-3 xl:w-48 pt-2">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                      <input
                        type="search"
                        className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-white bg-primary bg-clip-padding border border-solid border-primary rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                      />
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  class="text-white rounded-lg  text-sm font-semibold  hover:text-secondary px-2 py-2 rounded-one "
                >
                  <i class="fa-solid fa-bell w-10 fa-4x text-primary  text-sm w- text-center mx-auto py-2 px-3"></i>
                </a>

                <a
                  href="#"
                  class=" text-primary rounded-lg pt-4   text-md font-semibold  hover:text-secondary "
                >
                  <i class="fa-solid fa-plus pr-2 text-primary  text-sm w- text-center mx-auto "></i>
                  Create Feed
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="content mx-48 pt-20">
          <div className="cards  grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card rounded-xl shadow-2xl bg-white  ">
              <div className="content">
                <div className="card-img bg-primary h-40"></div>

                <p className="pt-6 px-5 py-8 text-sm leading-6 font-light text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet cumque delectus.
                  <a href="" className="text-primary font-extrabold capitalize">
                    ..read more
                  </a>
                </p>
                <div className="bottom  grid grid-cols-3 bg-secondary ">
                  <div className="created_date pt-2">
                    <p className="text-white text-sm">Wed, 3:40PM</p>
                  </div>
                  <div className="create_btn">
                    <a href="">
                      <i class="fa-solid fa-message text-primary text-sm w- text-center mx-auto py-2 px-3"></i>
                    </a>
                  </div>

                  <div className="create_btn">
                    <a href="">
                      <i class="fa-solid fa-thumbs-up text-white text-sm w- text-center mx-auto py-2 px-3"></i>
                      <span className="text-xs ">20</span>
                    </a>

                    <a href="">
                      <i class="fa-solid fa-thumbs-down text-white text-sm w- text-center mx-auto py-2 px-3"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card rounded-xl shadow-2xl bg-white  ">
              <div className="content">
                <div className="card-img bg-primary h-40"></div>

                <p className="pt-6 px-5 py-8 text-sm leading-6 font-light text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet cumque delectus...{" "}
                  <a href="" className="text-primary font-extrabold capitalize">
                    ..read more
                  </a>
                </p>
                <div className="bottom  grid grid-cols-3 bg-secondary ">
                  <div className="created_date pt-2">
                    <p className="text-white text-sm">Wed, 3:40PM</p>
                  </div>
                  <div className="create_btn">
                    <a href="">
                      <i class="fa-solid fa-message text-primary text-sm w- text-center mx-auto py-2 px-3"></i>
                    </a>
                  </div>

                  <div className="create_btn">
                    <a href="">
                      <i class="fa-solid fa-thumbs-up text-white text-sm w- text-center mx-auto py-2 px-3"></i>
                      <span className="text-xs ">20</span>
                    </a>

                    <a href="">
                      <i class="fa-solid fa-thumbs-down text-white text-sm w- text-center mx-auto py-2 px-3"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card relative shadow-2xl bg-white rounded-lg  ">
              <div className="content">
                <div className="card-img bg-primary h-40"></div>

                <p className="pt-6 px-5 py-8 text-sm leading-6 font-light text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet cumque delectus...{" "}
                  <a href="" className="text-primary font-extrabold capitalize">
                    ..read more
                  </a>
                </p>
                <div className="bottom  grid grid-cols-3 bg-secondary px-2 ">
                  <div className="created_date pt-2">
                    <p className="text-white text-sm">Wed, 3:40PM</p>
                  </div>
                  <div className="create_btn">
                    <a href="">
                      <i class="fa-solid fa-message text-primary text-sm w- text-center mx-auto py-2 px-3"></i>
                    </a>
                  </div>

                  <div className="create_btn">
                    <a href="">
                      <i class="fa-solid fa-thumbs-up text-white text-sm w- text-center mx-auto py-2 px-3"></i>
                      <span className="text-xs ">20</span>
                    </a>

                    <a href="">
                      <i class="fa-solid fa-thumbs-down text-white text-sm w- text-center mx-auto py-2 px-3"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default UserDashboard;
