const LoginPage = () => {
  return (
    <div className="form">
          <form action="" className="w-full max-w-sm">
            <div class="md:items-start mb-8">
              <div class="">
                <label
                  class="block text-white text-sm  font-light  mb-1 md:mb-0 pr-4 uppercase"
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

            <div class="md:items-start mb-8">
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

            <div className="remember-section pt- flex justify-between">
              <div className="remember-me flex justify-between">
                <div className="bg-secondary h-4 w-4 rounded-sm mt-1">
                  <input
                    className="bg-secondary invisible rounded-md  pt-4"
                    type="checkbox"
                    checked
                    name=""
                    id=""
                  />
                </div>
                <p className="text-white pl-4 text-sm ">Remember me</p>
              </div>
              <div className="forg-pswd">
                <p className="hover:underline hover:underline-offset-6">
                  <a href="" className="text-secondary text-sm font-light">
                    Forgot Password
                  </a>
                </p>
              </div>
            </div>
            <div className="submit-btn mt-14">
              <button class="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 uppercase rounded-full w-full">
                Sign in
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
            <h1 className="text-white text-center tracking-wide ">Don’t have an account? <a className="text-secondary">Register</a></h1>
          </div>
        </div>
      
  );
};

export default LoginPage;
