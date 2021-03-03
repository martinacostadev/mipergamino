import firebase from "firebase/app";
import "firebase/storage";

const uploadImages = async (images) => {
  // let arrayImagenes = [];
  // return new Promise(function (resolve, reject) {
  // const promises = [];

  const promises = images.map(
    (image) =>
      new Promise((resolve) => {
        image["url"] = URL.createObjectURL(image);
        image["newRandomName"] = randomImageName(image);

        let uploadTask = firebase
          .storage()
          .ref()
          .child(`images/${image.newRandomName}`)
          .put(image);
        // promises.push(uploadTask);
        uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot) => {
            let progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            if (snapshot.state === firebase.storage.TaskState.RUNNING) {
              console.log(`Progreso: ${progress}%`);
            }
          },
          (error) => console.log(error.code),
          async () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      })
  );

  const sarasa = await Promise.all(promises);

  console.log("sarasa: ", sarasa);

  return sarasa;
};

const randomImageName = (image) => {
  const imageFormat = image.type.split("/")[1];
  const date = Date.now();
  const RandomSixNumbers = Math.floor(100000 + Math.random() * 900000);
  const imageName = `${date}-${RandomSixNumbers}.${imageFormat}`;

  return imageName;
};

export default uploadImages;
