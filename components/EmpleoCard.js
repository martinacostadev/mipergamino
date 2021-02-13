import { faBaby, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { formatDate } from "~/utils/utils";

import {
  Bathroom,
  ContractType,
  Currency,
  Garage,
  Job,
  JobLevel,
  Patio,
  Schedule,
} from "./icons";

export default function EmpleoCard({ empleo }) {
  const {
    area,
    type,
    currency,
    salary,
    level,
    schedule,
    contractType,
    title,
    description,
    location,
    images,
    user,
    createdAt,
  } = empleo;

  return (
    <div className="w-full mb-16 sm:mb-14">
      <div className="sm:max-w w-full lg:max-w-full lg:flex">
        <div
          className="rent-image bg-center lg:h-auto lg:w-1/3 lg:rounded-t-none lg:rounded-l"
          style={{ backgroundImage: `url(${images[0]})`, position: "relative" }}
          title={title}></div>
        <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="flex justify-between text-sm text-gray-600 flex items-center pb-2">
              {location.street} {location.streetnumber}, {location.village},{" "}
              {location.city} <span>{formatDate(createdAt)}</span>
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              <span className="text-gray-500">{type}</span> · {title}
            </div>
            <p className="text-gray-700 text-base">{description} ...</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6">
              <div className="flex items-center">
                <span className="svg">
                  <Job color={"fill-black"} size={32} />
                </span>
                <span className="feature-text">{area}</span>
              </div>
              <div className="flex items-center">
                <span className="svg">
                  <Currency color={"fill-black"} size={36} />
                </span>
                <span className="feature-text ">
                  {currency} {salary}
                </span>
              </div>
              <div className="flex items-center">
                <span className="svg">
                  <JobLevel color={"fill-black"} size={30} />
                </span>
                <span className="feature-text">{level}</span>
              </div>
              <div className="flex items-center">
                <span className="svg">
                  <Schedule color={"fill-black"} size={28} />
                </span>
                <span className="feature-text">{schedule}</span>
              </div>
              <div className="flex items-center">
                <span className="svg">
                  <ContractType color={"fill-black"} size={28} />
                </span>
                <span className="feature-text">{contractType}</span>
              </div>
            </div>
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
