import { useForm } from "react-hook-form";
import React from "react";
import { useEffect } from "react";
const { useState } = React;

export default function CitySelection() {
  //geoFindMe();

  // TODO: Hacer que funcione componentDidMount
  // componentDidMount() {
  //   const city = localStorage.getItem("city");
  //   const province = localStorage.getItem("province");
  //   setCity(city);
  //   setProvince(province);
  // };

  useEffect(() => {}, []);

  const [showForm, setShowForm] = useState(false);
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    setCity(localStorage.getItem("city"));
    setProvince(localStorage.getItem("province"));
  }, []);

  const handlerChangeCity = (event) => {
    setCity(localStorage.setItem("city", event.target.value));
  };

  const handlerChangeProvince = (event) => {
    setProvince(localStorage.setItem("province", event.target.value));
  };

  const onSubmit = async (data) => {
    try {
      localStorage.setItem("city", data.city);
      localStorage.setItem("province", data.province);
      setCity(data.city);
      setProvince(data.province);
    } catch (err) {
      alert(err);
    }

    if (
      localStorage.getItem("city") != null &&
      localStorage.getItem("province") != null
    ) {
      setShowForm(false);
    }
  };

  return (
    <div className="container flex justify-center">
      <div style={{ display: showForm ? "none" : "block" }}>
        <span
          className="cursor-pointer"
          onClick={() => {
            setShowForm(true);
          }}
        >
          {city} {province} Cambiar Ciudad
        </span>
      </div>

      <form
        style={{ display: showForm ? "block" : "none" }}
        className="w-full max-w-lg mb-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap mb-6">
          <div className="text-2xl font-semibold">Buscar en</div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Ciudad"
            >
              Ciudad
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="city"
              ref={register({ required: true })}
              type="text"
              value={city}
              onChange={handlerChangeCity}
              placeholder="Ciudad"
            />

            {errors.city && (
              <p className="text-red-500 text-xs italic">Indique ciudad</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="provincia"
            >
              Provincia
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="province"
              ref={register({ required: true })}
              type="text"
              value={province}
              onChange={handlerChangeProvince}
              placeholder="Provincia"
            />

            {errors.province && (
              <p className="text-red-500 text-xs italic">Indique provincia</p>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-6 mb-6">
          <div className="lg:block md:ml-6">
            <button
              type="submit"
              className="p-1 px-4 mx-4 hover:bg-green-500 text-white-700 font-semibold hover:text-white border border-green-500 hover:border-transparent rounded"
            >
              Confirmar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function geoFindMe() {
  //var output = document.getElementById("out");

  if (!navigator.geolocation) {
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    alert("Geolocation is not supported by your browser");
    return;
  }

  function success(position) {
    console.log(position);
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML =
      "<p>Latitude is " +
      latitude +
      "° <br>Longitude is " +
      longitude +
      "°</p>";

    var img = new Image();
    img.src =
      "http://maps.googleapis.com/maps/api/staticmap?center=" +
      latitude +
      "," +
      longitude +
      "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}
