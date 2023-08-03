import React from "react";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

const ChevronBack = ({ handleBack, fix, linkTo }) => {
  const myClass = classNames({
    "chevron-back": true,
    "chevron-back__fix": fix,
  });
  return (
    <Link href={linkTo}>
      <div className={myClass} onClick={handleBack}>
        <Image
          alt="chevron-back"
          src="/chevron-back.svg"
          width="16"
          height="32"
        />
      </div>
    </Link>
  );
};

export default ChevronBack;
