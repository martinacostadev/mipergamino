import MenuButton from "../components/MenuButton";
import CitySelection from "components/CitySelection";
import MainLayout from "~/components/MainLayout";

import Alquileres from "~/components/icons/Alquileres"
import Empleos from "~/components/icons/Empleos"
import Extravios from "~/components/icons/Extravios"

const menuButtons = [
  {
    id: 1,
    title: "Alquileres",
    icon: Alquileres,
  },
  {
    id: 2,
    title: "Extravíos",
    icon: Extravios,
  },
  {
    id: 3,
    title: "Empleos",
    icon: Empleos,
  }
];

export default function HomePage() {
  const RenderMenuButtons = menuButtons.map((item) => (
    <MenuButton key={item.id} text={item.title} icon={item.icon} />
  ))

  return (
    <MainLayout title="Mi Pergamino">
      <CitySelection />
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center h-36 sm:grid-rows-1 gap-4 py-4">
        {RenderMenuButtons}
      </div>
      <div className="flex items-center justify-center"></div>
      <footer></footer>
    </MainLayout>
  );
}
