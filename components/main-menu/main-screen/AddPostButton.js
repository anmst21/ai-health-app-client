import React from "react";
import Image from "next/image";
import Link from "next/link";

const AddPostButton = ({ link }) => {
  let image;
  switch (link) {
    case "/app/create":
      image = (
        <Image
          alt="add-post-button"
          src="/add-home.svg"
          width={60}
          height={60}
          className="add-home-btn__style"
        />
      );
      break;
    case "/app":
      image = (
        <Image
          alt="add-post-button"
          src="/close-home.svg"
          width={49}
          height={49}
          className="add-home-btn__style"
        />
      );
      break;

    case "/app/settings":
      image = (
        <Image
          alt="add-post-button"
          src="/save-changes-settings.svg"
          width={40}
          height={40}
          className="add-home-btn__style"
        />
      );
      break;
    case "/app/complexId123/basket":
      image = (
        <Image
          alt="add-post-button"
          src="/ingredients-icon.svg"
          width={43}
          height={43}
          className="add-home-btn__style"
        />
      );

      break;
  }

  return (
    <Link href={link}>
      <div className="add-home-btn">{image}</div>
    </Link>
  );
};

export default AddPostButton;
