import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/storage";

const randomImageName = (image) => {
  const imageFormat = image.type.split("/")[1];
  const date = Date.now();
  const RandomSixNumbers = Math.floor(100000 + Math.random() * 900000);
  const imageName = `${date}-${RandomSixNumbers}.${imageFormat}`;

  return imageName;
};

const uploadImage = async (images, arrayImagenes) => {
  // let arrayImagenes = [];
  // return new Promise(function (resolve, reject) {
  const promises = [];

  Array.from(images).forEach((image) => {
    image["url"] = URL.createObjectURL(image);
    image["newRandomName"] = randomImageName(image);

    let uploadTask = firebase
      .storage()
      .ref()
      .child(`images/${image.newRandomName}`)
      .put(image);
    promises.push(uploadTask);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (snapshot.state === firebase.storage.TaskState.RUNNING) {
          console.log(`Progreso: ${progress}%`);
        }
      },
      (error) => console.log(error.code),
      async () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          arrayImagenes.push(downloadURL);
        });
      }
    );
  });
};

const ImagesInput = ({ onChange, value, setImages, inputRef, ...props }) => {
  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.files.length > 3) {
      alert("Máximo 3 imágenes");
      return;
    }

    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];

      if (e.target.files[i].size > 3072000) {
        alert(
          `La imagen ${e.target.files[i].name} es muy grande. 
          Recortela o baje la resolución. 
          Máximo 3 MB.`
        );
        return;
      }

      newImage["url"] = URL.createObjectURL(newImage);
      newImage["newRandomName"] = randomImageName(newImage);
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleChange}
        value={value || []}
        multiple={true}
        accept=".jpg, .jpeg, .png"
        {...props}
        // style={{ opacity: 0 }}
      />
    </div>
  );
};

export default ImagesInput;
