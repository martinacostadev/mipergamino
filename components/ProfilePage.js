import Button from "./Button";
import Editar from "./icons/Editar";

export default function ProfilePage({ user }) {
  return (
    <div className="flex justify-center mt-24 mb-6">
      <form className="w-screen md:w-3/4 max-w-lg mb-6">
        <div className="flex justify-center mb-6">
          <div className="flex justify-center w-3/4 md:w-1/2">
            <div className="relative w-full lg:w-3/4 items-center">
              <img
                src={user?.photoURL}
                alt="..."
                className="shadow w-64 flex items-center rounded-full border-none"
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
              placeholder={user?.displayName}
            />
          </div>
        </div>
        <div className="flex -mx-3 mb-3">
          <div className="w-full px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="user"
              type="text"
              placeholder={user?.email}
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
              }}>
              Actualizar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
