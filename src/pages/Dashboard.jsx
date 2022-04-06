import React, { useState } from "react"
import Navbar from "../components/Navbar";

const UserDashboard = () => {
  const [showModal, setShowModal] = useState(false);
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
                  onClick={() => setShowModal(true)}
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
                      <span className="text-xs ">4</span>
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
                      <span className="text-xs ">4</span>
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


    {/* feed creation modal section starts */}

      <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
            <div className="relative p-3 w-full max-w-2xl h-full md:h-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid border-gray-300 rounded-t ">
                  <h6 className="text-xl font=semibold">Create new feed</h6>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                    <i class="fa-solid fa-circle-xmark" style={{color: '#034B5A'}}></i>
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form action="">

                    {/* feed title and Thematic areas */}
                    <div className="flex">
                        <div className="flex-auto w-80">
                            <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Feed Title</label>
                            <input type="text" id="small-input" class="block p-2 w-fit text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" name="feed_title" />
                        </div>

                        <div className="flex-auto w-80">
                            <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Feed Theme</label>
                            <select class="form-select appearance-none block w-full p-2 font-light text-sm text-gray-900 bg-gray-50 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="feed thematic area" name="tag">
                            <option selected disabled>Select feed thematic area</option>
                            <option value="Gender equality">Gender equality</option>
                            <option value="Fiscal transparency">Fiscal transparency</option>
                            <option value="Citizens engagement">Citizens engagement</option>
                            <option value="Extractive transparency">Extractive transparency</option>
                            <option value="Peace and Security">Peace and Security</option>
                           </select>
                        </div>
                    </div>

                    {/* feed Description */}
                    <div className="mt-6">
                          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Feed Description</label>
                          <textarea id="feed_description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description..." name="feed_description"></textarea>
                    </div>

                    {/* feed medias */}
                    <div className="flex items-end justify-between my-7">
                        <div>
                          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="user_avatar">Feed Media</label>
                          <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="feed_media_help" id="feed_media" type="file" name="feed_media" />
                        </div>


                        <div>
                          <a href="#" class=" text-primary rounded-lg pt-4 text-md font-semibold">
                            <i class="fa-solid fa-plus pr-2 text-primary  text-sm w- text-center "></i>add file
                          </a>
                        </div>
                    </div>
                  </form>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-primary active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>

    {/* feed creation modal section ends */}
    </div>
  );
};

export default UserDashboard;
