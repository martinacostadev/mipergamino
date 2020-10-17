import React from "react";

const Login = () => {
  return (
    <div class="max-w-sm overflow-hidden shadow-lg flex items-center justify-center">
      <div class=" min-h-screen flex rounded items-center justify-center bg-white  py-12 px-4 sm:px-6 lg:px-8 ">
        <div class="max-w-md w-full">
          <div>
            <img class="mx-auto h-12 w-auto" src="logo.svg" alt="Logo" />
            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Inicia sesión en tu cuenta
            </h2>
            <p class="mt-2 text-center text-sm leading-5 text-gray-600">
              <a
                href="#"
                class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150 px-2"
              >
                Crea una nueva cuenta
              </a>
            </p>
          </div>
          <form class="mt-8" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm ">
              <div>
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Email
                </label>
                <input
                  aria-label="Email address"
                  name="email"
                  type="email"
                  required
                  class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Email address"
                />
              </div>
              <div class="-mt-px py-3">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Contraseña
                </label>
                <input
                  aria-label="Password"
                  name="password"
                  type="password"
                  required
                  class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Password"
                />
              </div>
            </div>

            <div class="mt-6 flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label
                  for="remember_me"
                  class="ml-2 block text-sm leading-5 text-gray-900"
                >
                  Recuérdame
                </label>
              </div>

              <div class="text-sm leading-5">
                <a
                  href="#"
                  class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div class="mt-6">
              <button
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white  bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-blue-600  transition duration-150 ease-in-out"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 text-white-500 group-hover:text-white-400 transition ease-in-out duration-150"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
