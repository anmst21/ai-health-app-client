import Image from "next/image";
import { useState } from "react";
import {
  useSubmitPostInfoImageMutation,
  useFetchPostInfoImageQuery,
} from "@/redux/api/imageSlice";
import classNames from "classnames";

const BgUpload = ({ onChange, register, errors }) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [submitUserInfoImage] = useSubmitPostInfoImageMutation();

  const photoUpload = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    onChange(file);
    reader.onloadend = async () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <label
      htmlFor="photo-upload"
      className={classNames("bg-custom-file-upload", {
        "bg-custom-file-upload__error": errors.bgUpload,
      })}
    >
      <div className="bg-image-lg ">
        {imagePreviewUrl && (
          <Image
            alt="bg-image"
            src={imagePreviewUrl}
            width={850}
            height={260}
            className="bg-image-lg__component "
          />
        )}
      </div>
      {!imagePreviewUrl && (
        <div className="bg-img-wrap">
          <Image
            alt="avatar"
            htmlFor="photo-upload"
            src="/bg-upload.svg"
            width={60}
            height={60}
          />
        </div>
      )}

      <input
        {...register("bgUpload", { required: true })}
        id="photo-upload"
        type="file"
        onChange={photoUpload}
      />
    </label>
  );
};

export default BgUpload;
//https://codepen.io/OlgaKoplik/pen/ZdyKGY
