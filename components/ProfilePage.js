import Button from "./Button";
import Editar from "./icons/Editar";

export default function ProfilePage() {
  return (
    <div className="flex justify-center mt-40 mb-6">
      <form className="w-full xl:w-1/3 max-w-lg mb-6">
        <div className="flex -mx-3 mb-6">
          <div className="flex justify-center">
            <div className="relative w-3/4 sm:w-4/12 px-1">
              <img
                src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-2-800x800-3e08ef145920c93bbe320add0d2ef58d.jpg"
                alt="..."
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
              />

              <div className="absolute flex items-center bg-gray-800 rounded py-1 px-2 text-white right-0 bottom-0 mb-2">
                <Editar color={"fill-white"} size={20} className="mr-1" />
                Editar
              </div>
            </div>
          </div>
        </div>

        <div className="flex -mx-3">
          <div className="w-full px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="title"
              type="text"
              placeholder="Nombre"
            />
          </div>
        </div>
        <div className="flex -mx-3 mb-3">
          <div className="w-full px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="user"
              type="text"
              placeholder="Usuario"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="password"
              type="password"
              placeholder="Contraseña"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="repassword"
              type="repassword"
              placeholder="Repetir Contraseña"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full px-3 mb-6 md:mb-0">
            <Button
              onClick={(e) => {
                e.preventDefault();
                console.log("hola");
              }}
            >
              Actualizar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
