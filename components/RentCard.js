/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import { useRouter } from "next/router";
import { formatDate } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faBaby,
  faChevronDown,
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import {
  Patio,
  Garage,
  Bedroom,
  Bathroom,
  Inmobiliaria,
  Particular,
} from "./icons";

import TwitterButton from "./TwitterButton"
import FacebookButton from "./FacebookButton"

import { useRef } from "react";
import ModalGoncy from "./ModalGoncy";
// import Carousel from "react-multi-carousel";

const { useState, useEffect } = React;

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

export default function RentCard({ rent }) {
  const {
    _id,
    title,
    description,
    location,
    isparticular,
    warranties,
    images,
    price,
    features,
    user,
    createdAt,
  } = rent;
  const [Height, setHeight] = useState(51);
  const [ShowArrow, setShowArrow] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const desc = useRef(null);

  useEffect(() => {
    const wrapperHeight = desc.current.clientHeight; // document.querySelector(`.measuringWrapper.description-${rent._id}`).clientHeight
    if (wrapperHeight > 51) {
      setShowArrow(true);
    }
  });

  const router = useRouter();

  function openModal() {
    setIsOpen(true);
  }

  const toggleDescription = function () {
    const wrapperHeight = document.querySelector(
      `.measuringWrapper.description-${rent._id}`
    ).clientHeight;
    setHeight(Height != 51 ? 51 : wrapperHeight);
  };

  //mipergamino.vercel.app es Temporal
  const Url = "mipergamino.vercel.app" + router.asPath;
  return (
    <>
      <div className="w-full mb-16 sm:mb-14">
        <div className="sm:max-w w-full lg:max-w-full lg:flex">
          <div
            className="flex-col flex bg-center lg:h-auto lg:w-1/3 lg:rounded-t-none lg:rounded-l"
            title={title}
            onClick={openModal}
          >
            <img
              src={images[0]}
              className="max-w-full object-cover flex-1"
              loading="lazy"
            ></img>
          </div>

          {/* <Carousel
  centerMode={false}
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="rent-image bg-center lg:h-auto lg:w-1/3 lg:rounded-t-none lg:rounded-l"
>
  <div> <img src={images[0]} onClick={openModal} /> </div>
  <div> <img src={images[1]} onClick={openModal} /> </div>
</Carousel> */}

          <div className="w-full lg:w-2/3 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="flex justify-between text-sm text-gray-600 items-center pb-2">
                {location.village}, {location.city}{" "}
                <span>{formatDate(createdAt)}</span>
              </p>
              <div
                className="text-gray-900 font-bold text-xl mb-2 cursor-pointer"
                onClick={() => router.push(`/alquileres/${_id}`)}
              >
                {title} · <span className="text-gray-600">${price}</span>
              </div>
              {/* <p className="text-gray-700 text-base" style={{ display: Height ? 'none' : 'block' }} >{description}</p> */}

              <div
                id="grow"
                style={{ height: Height }}
                onClick={toggleDescription}
              >
                <div
                  className={`measuringWrapper description-${rent._id}`}
                  ref={desc}
                >
                  <div
                    className="text-gray-700 text-base"
                    className="alquilerDescription"
                  >
                    {description}
                    <span style={{ display: ShowArrow ? "block" : "none" }}>
                      ...
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="flex justify-center p-4"
                style={{ display: ShowArrow ? "flex" : "none" }}
              >
                <button onClick={toggleDescription} id="more-button">
                  {Height != 51 ? (
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      width={28}
                      className="text-gray-600"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      width={28}
                      className="text-gray-600"
                    />
                  )}
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6">
                <div className="flex items-center">
                  <span className="svg">
                    <Bedroom color={"fill-black"} size={32} />
                  </span>
                  <span className="feature-text font-semibold">
                    {features.bedrooms}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="svg">
                    <Bathroom color={"fill-black"} size={32} />
                  </span>
                  <span className="feature-text font-semibold">
                    {features.bathrooms}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="svg">
                    <Patio
                      color={features.exterior ? "fill-green" : "fill-red"}
                      size={24}
                    />
                  </span>
                  <span className="feature-text font-semibold">
                    {features.exterior ? "" : "No"} Patio
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="svg">
                    <Garage
                      color={features.garage ? "fill-green" : "fill-red"}
                      size={30}
                    />
                  </span>
                  <span className="feature-text font-semibold">
                    {features.garage ? "" : "No"} Garage
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="svg">
                    <FontAwesomeIcon
                      icon={faPaw}
                      width={28}
                      className={
                        features.petsallowed ? "text-green-600" : "text-red-600"
                      }
                    />
                  </span>
                  <span className="feature-text font-semibold">
                    {features.petsallowed ? "" : "No"} Mascotas
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="svg">
                    <FontAwesomeIcon
                      icon={faBaby}
                      width={23}
                      className={
                        features.childrenallowed
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    />
                  </span>
                  <span className="feature-text font-semibold">
                    {features.childrenallowed ? "" : "No"} Chicos
                  </span>
                </div>

                <div className="flex items-center pt-2">
                  {rent.isparticular ? (
                    <>
                      <span className="svg">
                        <Particular color={"fill-black"} size={32} />
                      </span>{" "}
                      <span className="feature-text font-semibold">
                        Particular
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="svg">
                        <Inmobiliaria color={"fill-black"} size={36} />
                      </span>{" "}
                      <span className="feature-text font-semibold">
                        Inmobiliaria
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={images[1]}
                alt={`Foto de ${user.name}`}
                loading="lazy"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">
                  {user.name} {user.whatsapp}
                </p>
                <p className="text-gray-600">{user.phonenumber}</p>
              </div>
              <div className="ml-auto">
                <TwitterButton className="mx-1" title={title} description={description} url={Url} />
                <FacebookButton className="mx-1" title={title} url={Url}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalIsOpen && (
        <ModalGoncy onClose={() => setIsOpen(false)}>
          <div>
            <img
              src="https://www.vivus.es/blog/wp-content/uploads/2019/04/hacerse-una-casa.jpeg"
              loading="lazy"
            />
          </div>
        </ModalGoncy>
      )}
    </>
  );
}
