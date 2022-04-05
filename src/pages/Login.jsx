const LoginPage = () => {
  return (
    <div className="logn-wrapper bg-primary h-auto">
      <div className="header bg-white py-4 ">
        <div className="logo w-3/4 mx-auto">
          <h1>ogplateau</h1>
        </div>
      </div>

      <div className="login-content py-40 grid grid-cols-1 md:grid-cols-2 w-3/4 mx-auto ">
        <div className="img">
          <h1 className="text-4xl text-white">ogplateau</h1>
        </div>
        <div className="form">
          <form action="" className="w-full max-w-sm">
            <div class="md:items-start mb-6">
              <div class="">
                <label
                  class="block text-white  font-light  mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
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

            <div class="md:items-start mb-6">
              <div class="">
                <label
                  class="block text-white  font-light  mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
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

            <div className="remember-section flex justify-between">
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
                <p className="text-white pl-4 ">Remember me</p>
              </div>
              <div className="forg-pswd">
                <p>
                  <a href="" className="text-secondary font-light">
                    Forgot Password
                  </a>
                </p>
              </div>
            </div>
            <div className="submit-btn pt-6">
              <button class="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 uppercase rounded-full w-full">
                Sign in
              </button>
            </div>
          </form>
          <div className="divide-section flex mt-10"></div>
          <div className="social-icons flex w-1/4 mx-28 justify-between">
            <div className="facebook border rounded-full border-secondary w-10 h-10">
              <a href=" " className="text-secondary text-center mx-auto">
              
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </div>
            <div className="google border rounded-full border-secondary w-10 h-10">
              <a href="">
                <i class="fa-brands fa-google text-secondary"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
