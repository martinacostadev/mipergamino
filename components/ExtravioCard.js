import { faBaby, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { formatDate } from "~/utils/utils";

import {
  Bathroom,
  Bedroom,
  Garage,
  Inmobiliaria,
  Particular,
  Patio,
} from "./icons";

export default function ExtravioCard({ extravio }) {
  const {
    type,
    title,
    description,
    location,
    images,
    price,
    features,
    user,
    createdAt,
  } = extravio;

  return (
    <div className="w-full mb-16 sm:mb-14">
      <div className="sm:max-w w-full lg:max-w-full lg:flex">
        <div
          className="rent-image bg-center lg:h-auto lg:w-1/3 lg:rounded-t-none lg:rounded-l"
          style={{ backgroundImage: `url(${images[0]})`, position: "relative" }}
          title={title}></div>
        <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="flex justify-between text-sm text-gray-600 items-center pb-2">
              {location.street} {location.streetnumber}, {location.village},{" "}
              {location.city} <span>{formatDate(createdAt)}</span>
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              <span className="text-gray-500">{type}</span> · {title}
            </div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={images[1]}
              alt={`Foto de ${user.name}`}
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">
                {user.name} {user.whatsapp}
              </p>
              <p className="text-gray-600">{user.phonenumber}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
