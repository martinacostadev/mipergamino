import { Gmail } from "./icons";

const Login = ({ login }) => {
  return (
    <div className="absolute top-0 right-0 w-full shadow-lg flex items-center justify-center">
      <div className="w-full lg:w-1/3 p-8 flex rounded items-center justify-center bg-white py-12">
        <div className="w-full">
          <div>
            {/* <img className="mx-auto h-12 w-auto" src="logo.svg" alt="Logo" /> */}
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Iniciar sesión
            </h2>
            <p className="mt-2 text-center text-sm leading-5 text-gray-600">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150 px-2"
              >
                Crea una nueva cuenta
              </a>
            </p>
          </div>
          <form className="mt-2" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm ">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  aria-label="Email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Email"
                />
              </div>
              <div className="-mt-px py-3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Contraseña
                </label>
                <input
                  aria-label="Password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Contraseña"
                />
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm leading-5 text-gray-900"
                >
                  Recuérdame
                </label>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex text-sm leading-5">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 text-blue-500 border-2 border-blue-500 border-transparent text-sm leading-5 font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-blue-600  transition duration-150 ease-in-out"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-white-500 group-hover:text-white-400 transition ease-in-out duration-150"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Iniciar sesión
              </button>

              <button
                className="group w-full flex justify-center py-2 my-4 text-blue-500 border-blue-500 border border-transparent text-sm leading-5 font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-blue-600  transition duration-150 ease-in-out"
                onClick={login}
              >
                <span className="flex left-0 inset-y-0 items-center pr-3">
                  <Gmail color={"fill-blue"} size={24} />
                </span>
                Login con Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
