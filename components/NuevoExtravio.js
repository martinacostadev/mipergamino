import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ImagesInput from "~/inputs/ImagesInput";
import uploadImages from "./UploadImages";

export default function NuevoExtravio() {
  const [buttonSubmitText, setButtonSubmitText] = useState("Enviar");
  const [isSending, setIsSending] = useState(false);
  const [images, setImages] = useState([]);
  const { register, handleSubmit, errors, control } = useForm();
  const onSubmit = async (data) => {
    setIsSending(true);
    setButtonSubmitText("Enviando...");
    if (!data.title) console.log("apaaaa");
    let firebaseimages = await uploadImages(images);
    let timeNow = Date.now();

    let rentData = JSON.stringify({
      ...data,
      images: firebaseimages,
      createdAt: timeNow,
      updated: timeNow,
      deleted: false,
      warranties: 1,
    });

    // let rentData = JSON.stringify({
    //   ...data,
    //   images: firebaseimages,
    //   price: price,
    //   createdAt: timeNow,
    //   updated: timeNow,
    //   deleted: false,
    //   warranties: 1,
    //   isparticular: true,
    //   user: {
    //     name: "Martín Acosta",
    //     phoneNumber: "+5493114324343",
    //     whatsapp: true,
    //   },
    // });

    try {
      const res = await fetch("/api/alquiler", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: rentData,
      });

      if (res.status === 200) {
        setButtonSubmitText("Publicación creada con éxito.");
        console.log("Geniaaal!", res);
      } else {
        setIsSending(false);
        setButtonSubmitText("Enviar");
        console.log("Error!", res);
      }
    } catch (err) {
      setIsSending(false);
      setButtonSubmitText("Enviar");
      alert(err);
    }
  };

  const onImageChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["url"] = URL.createObjectURL(newImage);
      newImage["newRandomName"] = randomImageName(newImage);
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const removeImage = (url) => {
    const newImages = images.filter((image) => image.url != url);
    setImages(newImages);
  };

  const onUploadSubmission = (e) => {
    e.preventDefault(); // prevent page refreshing
    const promises = [];

    images.forEach((image) => {
      const uploadTask = firebase
        .storage()
        .ref()
        .child(`images/${image.newRandomName}`)
        .put(image);
      promises.push(uploadTask);
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (snapshot.state === firebase.storage.TaskState.RUNNING) {
            console.log(`Progreso: ${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
        }
      );
    });
    Promise.all(promises)
      .then(() => alert("Todas las imágenes se han subido"))
      .catch((err) => console.log(err.code));
  };

  return (
    <div className="flex justify-center mb-6">
      <form className="w-full max-w-lg mb-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap mb-6">
          <div className="text-2xl font-semibold">Añadir Extravio</div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="title"
            >
              Título
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="title"
              type="text"
              placeholder="Mascota extraviada"
              ref={register({ required: true })}
            />

            {errors.title && (
              <p className="text-red-500 text-xs italic">Complete el título</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description"
            >
              Descripción
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="description"
              rows="4"
              placeholder="Breve descripción"
              ref={register({ required: true })}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="city"
            >
              Localidad
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="location.city"
              type="text"
              placeholder="Localidad"
              ref={register({ required: true })}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="village"
            >
              Barrio
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="location.village"
              type="text"
              placeholder="Barrio"
              ref={register({ required: true })}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Calle
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="location.street"
              type="text"
              placeholder="calle"
              ref={register({ required: true })}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Altura
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="location.streetnumber"
              type="text"
              placeholder="1584"
              ref={register({ required: true })}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="user.name"
            >
              Nombre Contacto
            </label>
            <div className="relative">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="user.name"
                type="text"
                placeholder="Contacto"
                ref={register({ required: true })}
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="petsallowed"
            >
              Teléfono
            </label>
            <div className="relative">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="user.phonenumber"
                type="text"
                placeholder="+549..."
                ref={register({ required: true })}
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="childrenallowed"
            >
              WhatsApp
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="user.whatsapp"
                ref={register({ required: true })}
              >
                <option value="true">Sí</option>
                <option value="false">No</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mb-6 md:mb-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="images"
          >
            Imágenes
          </label>
          <div className="relative mt-4">
            <Controller
              name="images"
              control={control}
              id="imgButton"
              className="hidden"
              value={images || []}
              render={({ onChange, value, ref }) => (
                <ImagesInput
                  type="file"
                  value={value}
                  onChange={onChange}
                  setImages={setImages}
                  inputRef={ref}
                />
              )}
            />
          </div>
          <div className="flex w-full p-4">
            {images.map(({ url }) => {
              return (
                <div
                  className="w-40 h-40 bg-center relative"
                  style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                  key={url}
                >
                  <button
                    className="absolute top-0 right-0 mr-2 
                      rounded-full bg-red-600 h-6 w-6 flex items-center justify-center"
                    onClick={() => removeImage(url)}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full mb-6 md:mb-4">
          <label>
            <input type="checkbox" name="cb-accept" /> Acepto los términos y
            condiciones.
          </label>
        </div>

        <div className="flex justify-center mt-6 mb-6">
          <button
            type="submit"
            className=" w-full p-1 hover:bg-green-500 text-white-700 font-semibold hover:text-white border border-green-500 hover:border-transparent rounded"
            disabled={isSending}
            id="btnSubmit"
          >
            {buttonSubmitText}
          </button>
        </div>
      </form>
    </div>
  );
}
