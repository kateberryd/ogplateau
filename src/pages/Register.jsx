const RegisterPage = () => {
    return (
      <div className="form">
            <form action="" className="w-full">
              <div class="md:items-start mb-4">
                <div class="">
                  <label
                    class="block text-white text-sm  font-light  mb-1 md:mb-0 pr-4 uppercase"
                    for="inline-full-name "
                  >
                    Name
                  </label>
                </div>
                <div class="w-full pt-4">
                  <input
                    class="bg-inputcolor appearance-none rounded-full border-2 border-inputcolor  w-full py-2 px-4 text-primary leading-tight focus:outline-none focus:bg-inputcolor focus:border-secondary"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
              </div>
  
              <div class="md:items-start mb-4">
                <div class="">
                  <label
                    class="block text-white  text-sm font-light uppercase  mb-1 md:mb-0 pr-4"
                    for="inline-full-name "
                  >
                    Phone
                  </label>
                </div>
                <div class="w-full pt-4">
                  <input
                    class="bg-inputcolor appearance-none rounded-full border-2 border-inputcolor  w-full py-2 px-4 text-primary leading-tight focus:outline-none focus:bg-inputcolor focus:border-secondary"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
              </div>
              
              <div class="md:items-start mb-4">
                <div class="">
                  <label
                    class="block text-white  text-sm font-light uppercase  mb-1 md:mb-0 pr-4"
                    for="inline-full-name "
                  >
                    Email
                  </label>
                </div>
                <div class="w-full pt-4">
                  <input
                    class="bg-inputcolor appearance-none rounded-full border-2 border-inputcolor  w-full py-2 px-4 text-primary leading-tight focus:outline-none focus:bg-inputcolor focus:border-secondary"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
              </div>
              
              
              <div class="md:items-start mb-4">
                <div class="">
                  <label
                    class="block text-white  text-sm font-light uppercase  mb-1 md:mb-0 pr-4"
                    for="inline-full-name "
                  >
                    Password
                  </label>
                </div>
                <div class="w-full pt-4">
                  <input
                    class="bg-inputcolor appearance-none rounded-full border-2 border-inputcolor  w-full py-2 px-4 text-primary leading-tight focus:outline-none focus:bg-inputcolor focus:border-secondary"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
              </div>
              
              <div class="md:items-start mb-4">
                <div class="">
                  <label
                    class="block text-white  text-sm font-light uppercase  mb-1 md:mb-0 pr-4"
                    for="inline-full-name "
                  >
                    Confirm Password
                  </label>
                </div>
                <div class="w-full pt-4">
                  <input
                    class="bg-inputcolor appearance-none rounded-full border-2 border-inputcolor  w-full py-2 px-4 text-primary leading-tight focus:outline-none focus:bg-inputcolor focus:border-secondary"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
              </div>
  
           
              <div className="submit-btn mt-8">
                <button class="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 uppercase rounded-full w-full">
                  Register
                </button>
              </div>
            </form>
            <div className="divide-section flex mt-12"></div>
            <div className="social-icons flex w-2/4 text-center mx-auto justify-between">
              <div className="facebook border rounded-full border-secondary w-10 h-10">
                <a href=" " className="text-secondary  text-center mx-auto">
                
                  <i class="fa-brands fa-facebook-f text-center mx-auto py-2 px-3"></i>
                </a>
              </div>
              <div className="google border rounded-full border-secondary w-10 h-10">
                <a href="">
                  <i class="fa-brands fa-google text-secondary text-sm w- text-center mx-auto py-2 px-3"></i>
                </a>
              </div>
            </div>
            <div className="footer mt-8">
              <h1 className="text-white text-center tracking-wide ">Already have an account? <a className="text-secondary">Sign In</a></h1>
            </div>
          </div>
        
    );
  };
  
  export default RegisterPage;
  