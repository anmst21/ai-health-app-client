import React, { useEffect, useState } from "react";
import Image from "next/image";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(90);

  return (
    <div className="loading-screen-container">
      <div className="loading-screen">
        <Image src="/icon-loading-screen.svg" width={222} height={222} />
        <div className="loading-screen__bar">
          <div
            className="loading-screen__fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
