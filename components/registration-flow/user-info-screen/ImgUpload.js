import Image from "next/image";
import { useState, useEffect } from "react";

import {
  useSubmitUserInfoImageMutation,
  useFetchUserInfoImageQuery,
} from "@/redux/api/imageSlice";

const ImgUpload = () => {
  const {
    data: fetchedImage,
    refetch,
    isLoading,
    isError,
  } = useFetchUserInfoImageQuery(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState();
  console.log(fetchedImage);
  const ImageComponent = () => {
    if (isLoading) {
      return (
        <div className="settings-page__loader">
          <Image
            alt="loading"
            src={"/loading_spinner.svg"}
            width={50}
            height={50}
          ></Image>
        </div>
      );
    } else {
      return (
        <Image
          alt="user avatar"
          htmlFor="photo-upload"
          src={imagePreviewUrl}
          width={100}
          height={100}
          className="custom-file-upload__cover"
        />
      );
    }
  };

  useEffect(() => {
    if (fetchedImage) {
      setImagePreviewUrl(fetchedImage.filename);
    }
    if (isError || !fetchedImage || !fetchedImage.filename) {
      setImagePreviewUrl("/profile.svg");
    }
  }, [fetchedImage, isError]);

  const [submitUserInfoImage] = useSubmitUserInfoImageMutation();

  const photoUpload = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = async () => {
      setImagePreviewUrl(reader.result);

      const formData = new FormData();
      formData.append("profileImage", file); // This is the change

      await submitUserInfoImage(formData);
      refetch();
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex-photo">
      <label htmlFor="photo-upload" className="custom-file-upload">
        <div className="img-wrap settings-page__header--img">
          {/* <Image
            alt="user avatar"
            htmlFor="photo-upload"
            src={imagePreviewUrl}
            width={100}
            height={100}
            className="custom-file-upload__cover"
          /> */}
          {/* <div className="settings-page__loader">
            <Image
              alt="loading"
              src={"/loading_spinner.svg"}
              width={50}
              height={50}
            ></Image>
          </div> */}
          {ImageComponent()}
          {/* <Image
            alt="user avatar"
            htmlFor="photo-upload"
            src="/"
            width={100}
            height={100}
            className="custom-file-upload__cover"
          /> */}
        </div>
        <input
          id="photo-upload"
          name="profileImage"
          type="file"
          onChange={photoUpload}
        />
      </label>
    </div>
  );
};

export default ImgUpload;
//https://codepen.io/OlgaKoplik/pen/ZdyKGY
